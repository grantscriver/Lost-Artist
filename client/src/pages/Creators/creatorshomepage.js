import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
            
                
                <div className="dropdown is-hoverable">
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
                </div>
                    

                <div className="columns">
                    
                    <div className="column is-one-fifth has-background-white">
                        <aside className="menu has-text-centered">
                            <p className="menu-label">
                                IA
                            </p>
                                <ul className="menu-list">
                                {creators.length > 0 &&
                                     creators.map((creator, i) => {
                                         if(creator.stateId === 1) {
                                            return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                         }
                                    })
                                }
                                </ul>
                            <p className="menu-label">
                                MN
                            </p>
                                <ul className="menu-list">
                                {creators.length > 0 &&
                                     creators.map((creator, i) => {
                                         if(creator.stateId === 2) {
                                            return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                         }
                                    })
                                }
                                </ul>
                            <p className="menu-label">
                                MI
                            </p>
                                <ul className="menu-list">
                                {creators.length > 0 &&
                                     creators.map((creator, i) => {
                                         if(creator.stateId === 3) {
                                            return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                         }
                                    })
                                }
                                </ul>
                            <p className="menu-label">
                                ND
                            </p>
                                <ul className="menu-list">
                                {creators.length > 0 &&
                                     creators.map((creator, i) => {
                                         if(creator.stateId === 4) {
                                            return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                         }
                                    })
                                }
                                </ul>
                            <p className="menu-label">
                                SD
                            </p>
                                <ul className="menu-list">
                                {creators.length > 0 &&
                                     creators.map((creator, i) => {
                                         if(creator.stateId === 5) {
                                            return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                         }
                                    })
                                }
                                </ul>
                            <p className="menu-label">
                                WI
                            </p>
                                <ul className="menu-list">
                                {creators.length > 0 &&
                                     creators.map((creator, i) => {
                                         if(creator.stateId === 6) {
                                            return <li><a href={`/creators/${creator.id}`}>{creator.artist_name}</a></li>
                                         }
                                    })
                                }
                                </ul>
                            </aside>
                    </div>
                    <Wrapper>
                    {creators.length > 0 && 
                        creators.map((creator, i) => {
                            console.log(creator);
                            return (
                        <Link to={`/creators/${creator.id}`}> 
                                             
                            <CreatorColumn {...creator} />
                        </Link>
                            )
                        })
                    }
                    </Wrapper>
                </div>
            
            
            
            
                
        </>
    )   
}

export default Creator