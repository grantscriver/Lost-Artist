import React from "react";

function CreatorInfo({artist_name, artist_city, artist_state, artist_about, artist_instagram, artist_email}) {
    return (
        <div className="column is-5">
            <p className="title is-4">{artist_name}</p>
            <p className="title is-5">{artist_city},{artist_state}</p>
            <br></br>
            <p>
                {artist_about}
            </p>
                
            <div className="level"></div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="columns">
                <div className="column is-one-quarter">
                    <h1 className="title is-4">Contact:</h1>
                </div>
                <div className="column is-one-quarter is-offset-one-half">
                    <a className="icon" href={`https://instagram.com/${artist_instagram}`} target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram fa-3x"></i>
                    </a>

                    <a className="icon is-pulled-right" href={`mailto:${artist_email}`}>
                        <i className="far fa-envelope fa-3x"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}


function NoCreatorInfo() {
    return (
        <div className="column is-5">
            <p className="title is-4">Please add Profile details with the "Add My Info" button.</p>
        </div>
    )
}


export {
    CreatorInfo,
    NoCreatorInfo
}