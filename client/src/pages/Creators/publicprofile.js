import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import axios from "axios";

import { app } from "../../base";

const db = app.firestore();

function  PublicProfile() {
    const [creator, setCreator] = useState({});
    const [item, setItem] = useState([]);

    const { id, artist_name, artist_email, artist_instagram, artist_about, artist_city, artist_state } = creator;

    let URL = window.location.pathname;
    let search = URL.lastIndexOf("/");
    let resultId = URL.substring(search + 1);
    console.log(resultId);

    useEffect(() => {
        axios.get(`/api/public/creator/${resultId}`)
        .then(res => {
            console.log("HELLO?")
            console.log(res.data)
            setCreator(res.data);
            transitionIdToState(res.data.stateId);
        })
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

    function transitionIdToState(id) {
        switch (id) {
            case 1:
                setCreator(creator => ({...creator, artist_state: "IA"}))
                break;
            case 2:
                setCreator(creator => ({...creator, artist_state: "MN"}))
                break;
            case 3:
                setCreator(creator => ({...creator, artist_state: "MI"}))
                break;
            case 4:
                setCreator(creator => ({...creator, artist_state: "ND"}))
                break;
            case 5: 
                setCreator(creator => ({...creator, artist_state: "SD"}))
                break;
            case 6: 
                setCreator(creator => ({...creator, artist_state: "WI"}))
                break;
            default:
                console.log("No State set.")
        }
        
  }





    return (
        <>
            <div className="card" >
                <div className="columns">
                    <div className="column is-3 is-offset-1">
                        <img src="https://bulma.io/images/placeholders/480x640.png" alt="placeholder" />
                    </div>
                    {creator.artist_name 
                        ? (
                        <div className="column is-5">
                            <p className="title is-4">{artist_name}</p>
                            <p className="title is-5">{artist_city}, {artist_state} </p>
                            <br></br>

                            <p>{artist_about}</p>

                            <div className="level"></div>
                            <div className="level"></div>
                            <div className="level"></div>
                            <div className="level"></div>
                            <div className="columns ">
                                <div className="column is-one-quarter">
                                    <h1 className="title is-4">Contact:</h1>
                                </div>
                                <div className="column is-one-quarter is-offset-one-half">
                                    <a className="icon" href={`https://instagram.com/${artist_instagram}`}>
                                        <i class="fab fa-instagram fa-3x"></i>
                                    </a>

                                    <a className="icon is-pulled-right" href={`mailto:${artist_email}`}>
                                        <i class="far fa-envelope fa-3x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                        : null

                    }
                </div>
            </div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="columns">
                <div className="space-left column is-two-thirds">
    
                    {/* placeholder column to push Cat & Color dropdowns right */}
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
                <div className="columns is-flex-justify-content-center">
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

export default PublicProfile;
