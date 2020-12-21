import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Input,
  AboutTextArea,
  StateDropDown,
  FormBtn,
} from "../../components/Forms/EditCreatorfile";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { app } from "../../base";

const db = app.firestore();

function AddProfileData() {
  // db
  const [creator, setCreator] = useState([]);
  // auth0
  const { user, getAccessTokenSilently } = useAuth0();

  //form
  const [form, setForm] = useState({});

  //file url
  const [fileUrl, setFileUrl] = useState(null);

  //firebase
  const crypto = require("crypto");
  const id = crypto.randomBytes(16).toString("hex");

  const history = useHistory();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;

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
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();
  }, [form]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  function handleInputChange(event) {
    let { name, value } = event.target;

    setForm((form) => ({ ...form, [name]: value }));
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const photoName = event.target.elements.name.value;

    db.collection("creator")
      .doc(photoName)
      .onSnapshot(function (doc) {
        let photoData = doc.data();
        sendToDB(event, photoData);
      });
    await db.collection("creator").doc(photoName).set({
      id: id,
      name: photoName,
      pic: fileUrl,
    });
  };

  function sendToDB(event, photo) {
    let formData = {
      artist_name: event.target.elements.name.value,
      artist_email: user.email,
      artist_instagram: event.target.elements.instagram.value,
      artist_city: event.target.elements.city.value,
      artist_about: event.target.elements.about.value,
      stateId: event.target.elements.state.value,
      image: photo.pic,
    };
    console.log(formData);
    setCreator({ ...creator, formData });
    axios.post("/api/create/creators", formData).then((res) => {
      console.log(res);
      setForm((form) => ({
        ...form,
        name: "",
        city: "",
        state: "",
        about: "",
        email: "",
        instagram: "",
      }));
      setFileUrl(null);
      history.push("/private/profile");
    });
  }

  return (
    <section className="hero has-background-grey-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-1"></div>
            <div className="column is-3">
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
            <div className="column is-1"></div>
            <div className="column is-6">
              <form onSubmit={handleFormSubmit}>
                <Input
                  name="name"
                  value={form.name}
                  placeholder={"Full Name"}
                  onChange={handleInputChange}
                >
                  Name:
                </Input>
                <Input
                  name="city"
                  value={form.city}
                  placeholder={"City"}
                  onChange={handleInputChange}
                >
                  City:
                </Input>
                <StateDropDown
                  value={form.state}
                  onChange={handleInputChange}
                />
                <AboutTextArea
                  value={form.about}
                  onChange={handleInputChange}
                />
                <Input
                  name="instagram"
                  value={form.instagram}
                  placeholder={"Don't include the '@' symbol."}
                  onChange={handleInputChange}
                >
                  Instagram:
                </Input>
                <FormBtn>Save</FormBtn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddProfileData;
