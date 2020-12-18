import React, { useEffect, useState } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";

import { app } from "../../base";
const db = app.firestore();

function Loggedinprofile() {
    const [item, setItem] = useState([]);

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
            <div className="card" >
                <div className="columns">
                    <div className="column is-3 is-offset-1">
                        <img src="https://bulma.io/images/placeholders/480x640.png" alt="placeholder" />
                    </div>
                    <div className="column is-5">
                        <p className="title is-4">About: Lizzie Alfaro</p>
                        <p className="title is-5">Minneapolis, MN </p>
                        <br></br>
                        <p>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        <div className="level"></div>
                        <div className="level"></div>
                        <div className="level"></div>
                        <div className="level"></div>
                        <div className="columns ">
                            <div className="column is-one-quarter">
                                <h1 className="title is-4">Contact:</h1>
                            </div>
                            <div className="column is-one-quarter is-offset-one-half">
                                <a className="icon " >
                                    <i class="fab fa-instagram fa-3x"></i>
                                </a>

                                <a className="icon is-pulled-right">
                                    <i class="far fa-envelope fa-3x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <Link to="/private/profile/editcreator">
                            <button class="button is-black">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="columns">
                <div className="space-left column is-two-thirds">
                    <Link to="/private/profile/add-item">
                        <button class="button is-black">Add</button>
                    </Link>
                </div>
                <div className="column is-justify-content-space-around">
                    <div className="dropdown  is-hoverable">
                        <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Category</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    All
                                    </a>
                                <a href="#" className="dropdown-item">
                                    Hats
                                    </a>
                                <a href="#" className="dropdown-item">
                                    Shirts
                                    </a>
                                <a href="#" className="dropdown-item">
                                    Hoodies
                                    </a>
                                <a href="#" className="dropdown-item">
                                    Shoes
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-left dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Color</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>

                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    White
                                        </a>
                                <a href="#" className="dropdown-item">
                                    Black
                                        </a>
                                <a href="#" className="dropdown-item">
                                    Grey
                                        </a>
                                <a href="#" className="dropdown-item">
                                    Beige
                                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level"></div>
            <div className="level"></div>
            <section className="space-left">
                <div className="columns">
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
                    </Wrapper>
                </div>
            </section>
        </>
    )
}

export default Loggedinprofile