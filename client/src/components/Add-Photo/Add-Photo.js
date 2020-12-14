import React, { useEffect } from "react";
import { app } from "../../base";

const db = app.firestore();

function AddPhoto() {
  const crypto = require("crypto");
  const id = crypto.randomBytes(16).toString("hex");
  const [fileUrl, setFileUrl] = React.useState(null);
  const [item, setItem] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL(), console.log(file));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    if (!itemName || !fileUrl) {
      return;
    }
    await db.collection("item").doc(itemName).set({
      id: id,
      name: itemName,
      pic: fileUrl,
    });
  };

  useEffect(() => {
    const fetchItem = async () => {
      const itemCollection = await db.collection("item").get();
      setItem(
        itemCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchItem();
  }, []);

  return (
    <>
      <div className="columns">
        {item.map((item) => {
          return (
            <div className="column is-3" key={item.id}>
              <div className="card">
                <a href={item.pic}>
                  <div className="card-image">
                    <figure className="image is-3by4">
                      <img src={item.pic} alt={item.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{item.name}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} accept="image/*" />
        <input type="text" name="itemName" placeholder="NAME" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default AddPhoto;
