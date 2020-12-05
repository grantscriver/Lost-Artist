import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
               <div className="navbar-brand">
                   <a className="navbar-item" href="#linktohomepage">
                       <h1>Lost Artist</h1>
                       <h3>Clothing Collaborative</h3> 
                   </a>

                   <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                       <span aria-hidden="true"></span>
                       <span aria-hidden="true"></span>
                       <span aria-hidden="true"></span>
                   </a>
               </div>

                <div id="navbar" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                State 
                            </a>

                            <div className="navbar-dropdown">
                                <a class="navbar-dropdown-item">
                                    IA
                                </a>
                                <a className="navbar-dropdown-item">
                                    MI
                                </a>
                                <a className="navbar-dropdown-item">
                                    MN
                                </a>
                                <a className="navbar-dropdown-item">
                                    ND
                                </a>
                                <a className="navbar-dropdown-item">
                                    SD
                                </a>
                                <a className="navbar-dropdown-item">
                                    WI
                                </a>
                            </div>
                        </div>

                        <a className="navbar-item" href="#link-creators-page">
                            Creators
                        </a>

                        <a className="navbar-item" href="#link-shop-page">
                            Shop
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable"> 
                            <div className="field has-addons">
                                <input className="input" type="text" placeholder="Search for..."></input>                               
                            </div>
                            <div className="control">
                                <a className="button is-info">
                                    Search
                                </a>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-item">
                                Login
                            </a>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="email" placeholder="Username">
                                    </input>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" placeholder="Password">
                                    </input>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <button className="button is-success">
                                        Login
                                    </button>
                                </p>
                            </div>
                            <div className="field">
                            <p className="control">
                                    <button className="button" href="#link-to-register-page">
                                        Register
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
           </nav>
        </div>
    )
}

export default Navbar