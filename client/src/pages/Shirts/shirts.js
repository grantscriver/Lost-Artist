import React from "react";
import Hero from "../../components/Hero/Hero";
import {NavLink} from "react-router-dom";
import ShopSideMenu from "../../components/ShopSideMenu/ShopSideMenu";
import ShopDropDowns from "../../components/ShopDropDowns/ShopDropDowns";
import Menu from "../../components/Menu/Menu";

function Shirts() {
    return (
        <>
            
            <Hero>

              <ShopDropDowns />
                <div className="level"></div>

                <div class="columns">
                    <div class="column is-one-fifth">
                        <Menu>
                            <li><NavLink to="/shop/hats">Hats</NavLink></li>
                            <li><NavLink to="/shop/shirts">Shirts</NavLink></li>
                            <li><NavLink to="/shop/hoodies">Hoodies</NavLink></li>
                            <li><NavLink to="/shop/shoes">Shoes</NavLink></li>
                        </Menu>
                    </div>
                    <div class="column">
                        <p class="title">This is Shirts</p>
                        <p class="subtitle">With an imadge</p>
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div class="column">
                        <p class="title">This is Shirts</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div class="column">
                        <p class="title">This is Shirts</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                </div>

            </Hero>
        </>
    )
}

export default Shirts