import React from "react";
import Hero from "../../components/Hero/Hero";
import { NavLink } from "react-router-dom";
import ShopDropDowns from "../../components/ShopDropDowns/ShopDropDowns";
import Menu from "../../components/Menu/Menu";

function Hats() {
    return (
        <>
            <Hero>
                <ShopDropDowns />
                <div className="level"></div>
                <div className="columns">
                    <div className="column is-one-fifth">
                        <Menu>
                            <li><NavLink to="/shop/hats">Hats</NavLink></li>
                            <li><NavLink to="/shop/shirts">Shirts</NavLink></li>
                            <li><NavLink to="/shop/hoodies">Hoodies</NavLink></li>
                            <li><NavLink to="/shop/shoes">Shoes</NavLink></li>
                        </Menu>
                    </div>
                    <div className="column">
                        <p className="title">This is Hats</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div className="column">
                        <p className="title">This is Hats</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div className="column">
                        <p className="title">This is Hats</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                </div>

            </Hero>
        </>
    )
}

export default Hats