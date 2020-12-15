import React, { useState, useEffect } from "react";

import { NavLink, Link, Route } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
// import axios from "axios";

import { app } from "../../base";

const db = app.firestore();

function ItemDetails() {
    const [item, setItem] = useState([]);
    // let pathItem = window.location.pathname;
    let URL = window.location.pathname;
    let search = URL.lastIndexOf('/');
    let resultId = URL.substring(search + 1);
    
    // -------- From backend API/database/sequelize -------
    // useEffect(() => {
    //     let itemId = props.id;
    //     axios.get("/api/items/" + itemId)
    //     .then(res => {
    //         console.log(res);
    //         setItem(res);
    //     })
    // }, []);


    // -------- from firebase -------- 
    useEffect(() => {
        const fetchItem = async () => {
          const itemCollection = await db.collection("item")
          .where("id", "==", `${resultId}`)
          .get();
          setItem(
            itemCollection.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        fetchItem();
    }, []);
      
    if (item.length > 0) {
        console.log("specific item: ", item);
      }
    // handleInputChange() {
        //LocalStorage Fun
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
                            {item.length > 0 &&
                                <img alt={item[0].name} className="item-image" src={item[0].pic} />
                            } 
                        </div>
                        <div className="column is-three-quarters has-background-grey">
                            
                                
                                <ul>
                                    {item.length > 0 &&
                                        <li className="title is-4">{item[0].name}</li>
                                    }
                                    <form className="control">
                                        <input type="radio" name="size" value="small" /> 
                                        <label for="small"> Small </label>
                                        <input type="radio" name="size" value="medium" />
                                        <label for="medium"> Medium </label>
                                        <input type="radio" name="size" value="large" /> 
                                        <label for="large"> Large </label>
                                        {/* className="title is-5 */}
                                    </form>
                                    
                                    <li><Link className="title is-5" to="/cart">Add to Cart</Link></li>
                                    <div className="level"></div>
                                    <div className="level"></div>
                                    <li className="title is-4">Creator Info:</li>
                                    <li className="title is-4">About item:</li>
                                </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails