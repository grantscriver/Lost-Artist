import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import CreatorColumn from "../../components/column/CreatorColumn";
import axios from 'axios';
import Wrapper from '../../components/Wrapper/Wrapper';

function Creator () {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        axios.get("/api/creators")
        .then(res => {
            console.log(res.data);
            setCreators(res.data);
        })
    }, [])
    return (
        <>
            
                
                {/* <div className="dropdown is-active">
                        <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>State</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">
                                        MN
                                    </a>
                                    <hr className="dropdown-divider"></hr>
                                    <a className="dropdown-item">
                                        ND
                                    </a>
                                    <hr className="dropdown-divider"></hr>
                                    <a href="#" className="dropdown-item">
                                        SD
                                    </a>
                                    <hr className="dropdown-divider"></hr>
                                    <a href="#" className="dropdown-item">
                                        WI
                                    </a>
                                    <hr className="dropdown-divider"></hr>
                                    <a href="#" className="dropdown-item">
                                        IA
                                    </a>
                                </div>
                            </div>
                        </div>
                </div> */}
                    

                <div className="columns">
                    
                    <div className="column is-one-fifth has-background-white">
                        <aside className="menu has-text-centered">
                            <p className="menu-label">
                                MN
                            </p>
                                <ul className="menu-list">
                                {creators.artist_state === 'MN' 
                                ? creators.map((creator, i) => {
                                        return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                    })
                                : null  
                                }
                                </ul>
                            <p className="menu-label">
                                ND
                            </p>
                                <ul className="menu-list">
                                {creators.artist_state === 'ND' 
                                ? creators.map((creator, i) => {
                                        return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                    })
                                : null  
                                }
                                </ul>
                            <p className="menu-label">
                                SD
                            </p>
                                <ul className="menu-list">
                                {creators.artist_state === 'SD' 
                                ? creators.map((creator, i) => {
                                        return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                    })
                                : null  
                                }
                                </ul>
                            <p className="menu-label">
                                WI
                            </p>
                                <ul className="menu-list">
                                {creators.artist_state === 'WI' 
                                ? creators.map((creator, i) => {
                                        return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                    })
                                : null  
                                }
                                </ul>
                            <p className="menu-label">
                                IA
                            </p>
                                <ul className="menu-list">
                                {creators.artist_state === 'IA' 
                                ? creators.map((creator, i) => {
                                        return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                    })
                                : null  
                                }
                                </ul>
                            </aside>
                    </div>
                    <Wrapper>
                    {creators.length > 0 && 
                        creators.map((creator, i) => {
                            console.log(creator);
                            return <CreatorColumn {...creator} />
                        })
                    }

                    {/* <div className="column">
                    <p className="title">Creator Name</p>
                        <p className="subtitle">State</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder">
                            </img>
                        </figure>
                        <br></br>
                        <p className="title">Creator Name</p>
                        <p className="subtitle">State</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder">
                            </img>
                        </figure>
                    </div> */}
                    <div className="column">
                    <p className="title">Creator Name</p>
                        <p className="subtitle">State</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder">
                            </img>
                        </figure>
                        <br></br>
                        <p className="title">Creator Name</p>
                        <p className="subtitle">State</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder">
                            </img>
                        </figure>
                    </div>
                    <div className="column">
                    <p className="title">Creator Name</p>
                        <p className="subtitle">State</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder">
                            </img>
                        </figure>
                        <br></br>
                        <p className="title">Creator Name</p>
                        <p className="subtitle">State</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder">
                            </img>
                        </figure>    
                    </div>
                    </Wrapper>
                </div>
            
            
            
            
                
        </>
    )   
}

export default Creator