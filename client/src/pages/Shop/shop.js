import React from "react";
import {NavLink} from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";




function Shop() {
    return (
        <>
            <Hero>
                <div className="column">
                
                <Menu>
                    <li><NavLink to="/shop/hats">Hats</NavLink></li>
                    <li><NavLink to="/shop/shirts">Shirts</NavLink></li>
                    <li><NavLink to="/shop/hoodies">Hoodies</NavLink></li>
                    <li><NavLink to="/shop/shoes">Shoes</NavLink></li>
                </Menu>

                </div>
            </Hero>
        </>
    )
}
export default Shop