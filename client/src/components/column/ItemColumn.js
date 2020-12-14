import React from "react";

function ItemColumn({id, style_name, artist_name,}) {
    return (
        <div className="column" data-id={id}>
            <p className="title">{style_name}</p>
            <p className="subtitle">By: {artist_name}</p>
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder">
                </img>
            </figure>
        </div>
    )
}

export default ItemColumn;