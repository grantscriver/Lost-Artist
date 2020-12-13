import React from "react";
import Hero from "../../components/Hero/Hero";
import { NavLink } from "react-router-dom";
import Menu from "../../components/Menu/Menu";

function Shop() {
    return (
        <>
            <Hero>
                <div className="column  is-full is-offset-3 is-9 ">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <div className="dropdown is-hoverable">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>State</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            IA
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            MI
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            MN
                                     </a>
                                        <a href="#" className="dropdown-item">
                                            ND
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            SD
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            WI
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column has-text-centered">
                            <div className="dropdown is-hoverable">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>Creators</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            Creator Name 1
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            Creator Name 2
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            Creator Name 3
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            ...
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="level"></div>
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
                    <div className="column">
                        <p className="title">This is All</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div className="column">
                        <p className="title">This is All</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div className="column">
                        <p className="title">This is All</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                </div>

            </Hero>
        </>
    )
}

export default Shop