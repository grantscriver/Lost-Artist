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
                                <a class="dropdown-item">
                                    IA
                                </a>
                                <a className="dropdown-item">
                                    MI
                                </a>
                                <a className="dropdown-item">
                                    MN
                                </a>
                                <a className="dropdown-item">
                                    ND
                                </a>
                                <a className="dropdown-item">
                                    SD
                                </a>
                                <a className="dropdown-item">
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
                            <a className="navbar-link">
                                Login
                            </a>

                            <div className="navbar-dropdown">
                                <a className="field">
                                    <p class="control">
                                        <input class="input" type="username" placeholder="Username"></input>
                                    </p>   
                                </a>

                                <a className="field">
                                    <p class="control">
                                        <input class="input" type="password" placeholder="Password"></input>
                                    </p>   
                                </a>

                                <a className="field">
                                    <p className="control">
                                        <button className="button is-link"> Login </button>
                                    </p>
                                </a>

                                <a className="field">
                                    <p className="control">
                                        <button className="button is-link"> Register </button>
                                    </p>
                                </a>
                            </div>                                  
                        </div>
                        



                        
                    </div>
                </div>
           </nav>
        </div>
    )
}

export default Navbar