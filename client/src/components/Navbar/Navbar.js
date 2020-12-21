import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthNav from "./AuthNath";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import "./Navbar.css";
//test
function Navbar() {
  const [activeStatus, setStatus] = useState(false);

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item-img-max-height" exact to="/">
            {/* <h1>Lost Artist</h1>
            <h3>Clothing Collaborative</h3> */}
            <img
              className="logo"
              src="/assets/LACC_logo.png"
              alt="lost artist logo"
            />
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

        <div
          id="navbar"
          className={`navbar-menu ${activeStatus ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <NavLink className="navbar-item" exact to="/creatorshomepage">
              Creators
            </NavLink>

            <NavLink className="navbar-item" to="/private/profile">
              Profile
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link is-arrowless" exact to="/shop">
                Shop
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink className="dropdown-item" to="/shop/?category=hats">
                  Hats
                </NavLink>
                <NavLink className="dropdown-item" to="/shop/?category=shirts">
                  Shirts
                </NavLink>
                <NavLink className="dropdown-item" to="/shop/?category=hoodies">
                  Hoodies
                </NavLink>
                <NavLink className="dropdown-item" to="/shop/?category=shoes">
                  Shoes
                </NavLink>
              </div>
            </div>

            <AuthNav />
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link is-arrowless" exact to="/cart">
                <span className="icon is-dark">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
              </NavLink>

              <div className="navbar-dropdown is-right">
                
                <Link className="title is-5" to="/cart">
                  <button className="button is-dark">GO TO CART</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

