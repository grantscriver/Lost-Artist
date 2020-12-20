import React from "react";

function AddPhoto({ onFileChange }) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-3by4">
            <img
              src="https://lh3.googleusercontent.com/proxy/KTL88Exe7RKumSLxbWn5cSp13MZX6ukIMM-bosF9sdHqsDSAheMQwUH--mBeSAP0X51KmkrlWnfK1NGuqd2F_DyYnjqt0r9_h5cCy6b7e_xquK6BCcaniVvPdtP9rKnUILPsIA"
              alt="placeholder"
            />
          </figure>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <input type="file" onChange={onFileChange} accept="image/*" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPhoto;
