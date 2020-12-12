import React from "react";
import { NavLink } from 'react-router-dom';

function ShopSideMenu() {
    return (
        <>
            <ul>
                <NavLink className="link" exact to="/shop/hats">
                    <li class="subtitle">
                        Hats
           </li>
                    <br></br>
                </NavLink>
                <NavLink className="link" exact to="/shop/shirts">
                    <li class="subtitle">
                        Shirts
            </li>
                    <br></br>

                </NavLink>
                <NavLink className="link" exact to="/shop/hoodies">
                    <li class="subtitle">
                        Hoodies
            </li>
                    <br></br>

                </NavLink>
                <NavLink className="link" exact to="/shop/shoes">
                    <li class="subtitle">
                        Shoes
            </li>
                    <br></br>

                </NavLink>
            </ul>
        </>
    )
}

export default ShopSideMenu