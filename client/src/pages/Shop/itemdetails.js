import React from "react";
import Hero from "../../components/Hero/Hero";
import { NavLink } from "react-router-dom";
import ShopDropDowns from "../../components/ShopDropDowns/ShopDropDowns";
import Menu from "../../components/Menu/Menu";

function ItemDetails() {
    // const [] = useState([]);
    // useEffect(() => {
    // }, []);
    // handleInputChange() {
    // }
    // handleFormSubmit() {
    // }
    return (
        <div className="container-fluid has-background-grey-light full">
            <div className="columns">
                <div className="column is-one-fifth has-background-grey-light">
                    <Menu>
                        <li><NavLink to="/shop">All</NavLink></li>
                        <li><NavLink to="/shop/hats">Hats</NavLink></li>
                        <li><NavLink to="/shop/shirts">Shirts</NavLink></li>
                        <li><NavLink to="/shop/hoodies">Hoodies</NavLink></li>
                        <li><NavLink to="/shop/shoes">Shoes</NavLink></li>
                    </Menu>
                </div>
                <div className="column has-background-grey-light">
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <img alt="placeholder" className="item-image" src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=320" />
                        </div>
                        <div className="column is-three-quarters has-background-grey">
                            <ul>
                                <li class="title is-4">Item Name:</li>
                                <button class="title is-5"> Small</button>
                                <button class="title is-5"> Medium</button>
                                <button class="title is-5"> Large</button>
                                <li><NavLink class="title is-5" to="/cart">Add to Cart</NavLink></li>
                                <div className="level"></div>
                                <div className="level"></div>
                                <li class="title is-4">Creator Info:</li>
                                <li class="title is-4">About item:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails