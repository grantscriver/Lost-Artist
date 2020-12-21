import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { app } from "../../base";

const db = app.firestore();

function AddItem() {
  const crypto = require("crypto");
  const id = crypto.randomBytes(16).toString("hex");
  const [fileUrl, setFileUrl] = useState(null);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [creator, setCreator] = useState({});
  const history = useHistory();
 
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;
      console.log("domain ", domain);
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { user_metadata } = await metadataResponse.json();
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();
    const callSecureApi = async () => {
      try {
        const token = await getAccessTokenSilently();
        axios
          .get(`/api/private/creators/${user.email}`, {
            headers: {
              Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
          })
          .then((res) => {
            if (res.data.length === 0) {
              console.log("length is zero");
            } else {
              setCreator(res.data);
            }
           
          });
      } catch (e) {
        console.log(e);
      }
    };
    callSecureApi();
  }, []);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (data) => {
    const name = data.itemName;

    db.collection("item")
      .doc(name)
      .onSnapshot(function (doc) {
        let photoData = doc.data();
        sendToDB(photoData, data);
      });
    await db.collection("item").doc(name).set({
      id: id,
      name: name,
      pic: fileUrl,
    });
  };

  function sendToDB(photo, data) {
    const item = {
      style_name: data.itemName,
      category: data.category,
      color: data.color,
      small_qty: data.small_qty,
      med_qty: data.med_qty,
      large_qty: data.large_qty,
      price: data.price,
      description: data.about,
      state_id: creator.stateId,
      artistId: creator.id,
      image: photo.pic,
    };
    axios.post("/api/items", item).then((res) => {
      console.log(res);
    });
    history.push("/private/profile");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="columns is-multiline is-mobile">
          <div className="column is-two-fifths">
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by4">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/placeholder.png"}
                    alt="placeholder"
                  />
                </figure>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <input
                        type="file"
                        onChange={onFileChange}
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="control">
                <input
                  className="input is-dark"
                  type="text"
                  placeholder="ITEM NAME"
                  name="itemName"
                  ref={register}
                ></input>
                <div className="level"></div>
                <span className="icon is-small is-left"></span>
                <textarea
                  className="textarea"
                  placeholder="ABOUT THE ITEM"
                  name="about"
                  ref={register}
                ></textarea>
                <div className="level"></div>
                <label className="label">Category</label>
                <div className="field">
                  <div className="control">
                    <div className="select is-dark">
                      <select className="font" name="category" ref={register}>
                        <option value="hats">HATS</option>
                        <option value="shirts">SHIRTS</option>
                        <option value="hoodies">HOODIES</option>
                        <option value="shoes">SHOES</option>
                      </select>
                    </div>
                  </div>
                </div>
                <label className="label">Color</label>
                <div className="field">
                  <div className="control">
                    <div className="select is-dark">
                      <select className="font" name="color" ref={register}>
                        <option value="red">RED</option>
                        <option value="blue">BLUE</option>
                        <option value="green">GREEN</option>
                        <option value="yellow">YELLOW</option>
                        <option value="black">BLACK</option>
                        <option value="gray">GRAY</option>
                        <option value="white">WHITE</option>
                      </select>
                    </div>
                  </div>
                </div>
                <input
                  className="input is-dark"
                  type="number"
                  placeholder="PRICE"
                  name="price"
                  ref={register}
                ></input>
                <div className="level"></div>
                <div className="columns">
                  <div className="column">
                    <label className="label">SIZES</label>
                    <div>
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          name="small"
                          value={true}
                          ref={register}
                        ></input>
                        SMALL
                      </label>
                      <div className="level"></div>

                      <label className="checkbox">
                        <input
                          type="checkbox"
                          name="medium"
                          value={true}
                          ref={register}
                        ></input>
                        MEDIUM
                      </label>
                      <div className="level"></div>
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          name="large"
                          value={true}
                          ref={register}
                        ></input>
                        LARGE
                      </label>
                    </div>
                  </div>

                  <div className="column">
                    <label className="label">QTY</label>
                    <div>
                      <input
                        className="input"
                        type="number"
                        placeholder="Small Qty"
                        name="small_qty"
                        defaultValue={0}
                        ref={register}
                      ></input>
                      <input
                        className="input"
                        type="number"
                        placeholder="Medium Qty"
                        name="med_qty"
                        defaultValue={0}
                        ref={register}
                      ></input>
                      <input
                        className="input"
                        type="number"
                        placeholder="Large Qty"
                        name="large_qty"
                        defaultValue={0}
                        ref={register}
                      ></input>
                    </div>
                  </div>
                </div>
                <button className="button" type="submit">
                  SUBMIT ITEM
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddItem;
