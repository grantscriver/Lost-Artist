import React from "react";

function CreatorColumn({ id, artist_name, image }) {
  return (
    <div className="column" data-id={id}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-3by4">
            <img src={image} alt={artist_name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{artist_name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorColumn;
