import React from "react";
import { NavLink } from 'react-router-dom';

function ShopSideMenu() {
    return (
        <>
            {/* <section class="section"> */}
            <article class="tile is-child notification is-warning">

                <div class="tile" >

                    <ul>
                        <NavLink className="link" exact to="/shop/hats">
                            <li>
                                Hats
           </li>
                        </NavLink>
                        <NavLink className="link" exact to="/shop/shirts">
                            <li>
                                Shirts
            </li>
                        </NavLink>
                        <NavLink className="link" exact to="/shop/hoodies">
                            <li>
                                Hoodies
            </li>
                        </NavLink>
                        <NavLink className="link" exact to="/shop/shoes">
                            <li>
                                Shoes
            </li>
                        </NavLink>
                    </ul>
                </div>
            </article>
            {/* </section> */}
        </>
    )
}

export default ShopSideMenu