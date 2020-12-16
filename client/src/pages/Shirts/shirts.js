import React, { useEffect, useState } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import ShopDropDowns from "../../components/ShopDropDowns/ShopDropDowns";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import ItemDetails from "../Shop/itemdetails";

import { app } from "../../base";

const db = app.firestore();

function Shirts() {
    const [item, setItem] = React.useState([]);

    useEffect(() => {
        const fetchItem = async () => {
            // Change this query to item specific when database is ready
            const itemCollection = await db.collection("item").get();
            setItem(
                itemCollection.docs.map((doc) => {
                    return doc.data();
                })
            );
        };
        fetchItem();
    }, []);

    if (item.length > 0) {
        console.log(item);
    }
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
                    {item.length > 0 &&
                        item.map((item) => {
                            return (
                                <div className="column is-3" key={item.id}>
                                    <div className="card">
                                        <Link to={`/shop/item/${item.id}`}>
                                            <div className="card-image">
                                                <figure className="image is-3by4">
                                                    <img src={item.pic} alt={item.name} />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">{item.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    <Route path={`/shop/item/:id`} component={ItemDetails} />
                </Wrapper>
            </div>
        </>
    )
}

export default Shirts