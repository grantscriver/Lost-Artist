import React from "react";
import { NavLink } from "react-router-dom";
import ShopDropDowns from "../../components/ShopDropDowns/ShopDropDowns";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";

function Shirts() {
    return (
        <>
            <div className="level">
                <ShopDropDowns />
            </div>
            <div className="columns">
                <div className="column is-one-fifth">
                    <Menu>
                        <li><NavLink to="/shop">All</NavLink></li>
                        <li><NavLink to="/shop/hats">Hats</NavLink></li>
                        <li><NavLink to="/shop/shirts">Shirts</NavLink></li>
                        <li><NavLink to="/shop/hoodies">Hoodies</NavLink></li>
                        <li><NavLink to="/shop/shoes">Shoes</NavLink></li>
                    </Menu>
                </div>
                <Wrapper>
                    <div className="column">
                        <p className="title">This is Shirts</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div className="column">
                        <p className="title">This is Shirts</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div className="column">
                        <p className="title">This is Shirts</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                </Wrapper>
            </div>
        </>
    )
}

export default Shirts