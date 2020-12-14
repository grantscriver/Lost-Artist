import React from 'react';

function CreatorColumn({id, artist_name, artist_state}) {
    
    return (
        <div className="column" data-id={id}>
            <p className="title">{artist_name}</p>
            <p className="subtitle">{artist_state}</p>
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder">
                </img>
            </figure>
        </div>
    )
}

export default CreatorColumn;