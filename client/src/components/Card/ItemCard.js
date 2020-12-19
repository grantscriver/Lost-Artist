import React from "react";
import { Link } from "react-router-dom";

function ItemCard({id, image, style_name}) {
    return (
        <div className="column is-3" key={id}>
            <div className="card">
                <Link to={`/shop/item/${id}`}>
                    <div className="card-image">
                        <figure className="image is-3by4">
                            <img src={image} alt={style_name} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{style_name}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default ItemCard;