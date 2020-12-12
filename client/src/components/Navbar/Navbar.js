<<<<<<< Updated upstream
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import LoginButton from "../Buttons/LoginButton";
// import LogoutButton from "../Buttons/LogoutButton";

function Navbar({children}) {
    const [activeStatus, setStatus] = useState(false);


    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink className="navbar-item" exact to="/">
                        <h1>Lost Artist</h1>
                        <h3>Clothing Collaborative</h3>
                    </NavLink>

                    <a onClick={() => { setStatus(!activeStatus) }} role="button" className={`navbar-burger burger ${activeStatus ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbar">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar" className={`navbar-menu ${activeStatus ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <NavLink className="navbar-link" exact to="/state">
                                State
                            </NavLink>

                            <div className="navbar-dropdown">
                                <NavLink className="dropdown-item" to="/state/iowa">
                                    IA
                                </NavLink>
                                <NavLink className="dropdown-item" to="/state/michigan">
                                    MI
                                </NavLink>
                                <NavLink className="dropdown-item" to="/state/minnesota">
                                    MN
                                </NavLink>
                                <NavLink className="dropdown-item" to="/state/north-dakota">
                                    ND
                                </NavLink>
                                <NavLink className="dropdown-item" to="/state/south-dakota">
                                    SD
                                </NavLink>
                                <NavLink className="dropdown-item" to="/state/wisconsin">
                                    WI
                                </NavLink>
                            </div>
                        </div>

                        <NavLink className="navbar-item" exact to="/creators">
                            Creators
                        </NavLink>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <NavLink className="navbar-link" exact to="/shop">
                                Shop
                            </NavLink>

                            <div className="navbar-dropdown">
                                <NavLink className="dropdown-item" to="/shop/hats">
                                    Hats
                                </NavLink>
                                <NavLink className="dropdown-item" to="/shop/shirts">
                                    Shirts
                                </NavLink>
                                <NavLink className="dropdown-item" to="/shop/hoodies">
                                    Hoodies
                                </NavLink>
                                <NavLink className="dropdown-item" to="/shop/shoes">
                                    Shoes
                                </NavLink>
                            </div>
                        </div>

=======
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [activeStatus, setStatus] = useState(false);

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" exact to="/">
            <h1>Lost Artist</h1>
            <h3>Clothing Collaborative</h3>
          </NavLink>

          <a
            onClick={() => {
              setStatus(!activeStatus);
            }}
            role="button"
            className={`navbar-burger burger ${
              activeStatus ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
>>>>>>> Stashed changes

        <div
          id="navbar"
          className={`navbar-menu ${activeStatus ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link" exact to="/state">
                State
              </NavLink>

              <div className="navbar-dropdown">
                <NavLink className="dropdown-item" to="/state/iowa">
                  IA
                </NavLink>
                <NavLink className="dropdown-item" to="/state/michigan">
                  MI
                </NavLink>
                <NavLink className="dropdown-item" to="/state/minnesota">
                  MN
                </NavLink>
                <NavLink className="dropdown-item" to="/state/north-dakota">
                  ND
                </NavLink>
                <NavLink className="dropdown-item" to="/state/south-dakota">
                  SD
                </NavLink>
                <NavLink className="dropdown-item" to="/state/wisconsin">
                  WI
                </NavLink>
              </div>
            </div>

            <NavLink className="navbar-item" exact to="/creators">
              Creators
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link" exact to="/shop">
                Shop
              </NavLink>

              <div className="navbar-dropdown">
                <NavLink className="dropdown-item" to="/shop/hats">
                  Hats
                </NavLink>
                <NavLink className="dropdown-item" to="/shop/shirts">
                  Shirts
                </NavLink>
                <NavLink className="dropdown-item" to="/shop/hoodies">
                  Hoodies
                </NavLink>
                <NavLink className="dropdown-item" to="/shop/shoes">
                  Shoes
                </NavLink>
              </div>
            </div>
            <NavLink className="navbar-item" exact to="/add-item">
              Add Item
            </NavLink>

            {/* <div className="navbar-item has-dropdown is-hoverable">
                            

                            <div className="navbar-dropdown">
                                <a className="field">
                                    <p className="control">
                                        <input className="input" type="username" placeholder="Username"></input>
                                    </p>
                                </a>

                                <a className="field">
                                    <p className="control">
                                        <input className="input" type="password" placeholder="Password"></input>
                                    </p>
                                </a>

                                <a className="field">
                                    <p className="control">
                                        <button className="button is-link"> Login </button>
                                    </p>
                                </a>

                                <a href="/register" className="field">
                                    <p className="control">
                                        <button className="button is-link" > Register </button>
                                    </p>
                                </a>
                            </div>
                        </div> */}

<<<<<<< Updated upstream
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">

                                    { children }
                                    {/* <LoginButton />
                                    <LogoutButton /> */}
                                    {/* <a className="button is-success" href="http://localhost:8080/login"> Login </a>
                                    <a className="button is-danger" href="http://localhost:8080/logout"> Logout </a> */}

                                </div>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <NavLink className="navbar-link" exact to="/cart">
                                <span class="icon">
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                </span>

                            </NavLink>

                            <div className="navbar-dropdown">
                                <NavLink className="dropdown-item" to="/addtocart">
                                    Add to cart
                                </NavLink>
                                <NavLink className="dropdown-item" to="/item1">
                                    Item 1
                                </NavLink>
                                <NavLink className="dropdown-item" to="item2">
                                    Item 2
                                </NavLink>
                            </div>
                        </div>
                    </div>
=======
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    className="button is-success"
                    href="http://localhost:8080/login"
                  >
                    {" "}
                    Login{" "}
                  </a>
                  <a
                    className="button is-danger"
                    href="http://localhost:8080/logout"
                  >
                    {" "}
                    Logout{" "}
                  </a>
>>>>>>> Stashed changes
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link" exact to="/cart">
                <span className="icon">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
              </NavLink>

              <div className="navbar-dropdown">
                <NavLink className="dropdown-item" to="/addtocart">
                  Add to cart
                </NavLink>
                <NavLink className="dropdown-item" to="/item1">
                  Item 1
                </NavLink>
                <NavLink className="dropdown-item" to="item2">
                  Item 2
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
