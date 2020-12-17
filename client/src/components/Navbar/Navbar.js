import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthNav from "./AuthNath";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import "./Navbar.css"
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
            <img className="logo" src="/assets/LACC_logo.png"      />
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
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link is-arrowless" exact to="/state">
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

            <NavLink className="navbar-item" exact to="/creatorshomepage">
              Creators
            </NavLink>

            <NavLink className="navbar-item" to="/profile">
              Profile
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link is-arrowless" exact to="/shop">
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
                <NavLink className="dropdown-item" to="/shop/itemdetails">
                  Item Details
                </NavLink>
              </div>
            </div>

            <NavLink className="navbar-item" exact to="/add-item">
              Add Item
            </NavLink>

            <AuthNav />
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link is-arrowless" exact to="/cart">
                <span className="icon is-dark">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
              </NavLink>

              <div className="navbar-dropdown is-right">
                <CartDropDown />
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

//<div className="navbar-item has-dropdown is-hoverable">

//     <div className="navbar-dropdown">
//         <a className="field">
//             <p className="control">
//                 <input className="input" type="username" placeholder="Username"></input>
//             </p>
//         </a>

//         <a className="field">
//             <p className="control">
//                 <input className="input" type="password" placeholder="Password"></input>
//             </p>
//         </a>

//         <a className="field">
//             <p className="control">
//                 <button className="button is-link"> Login </button>
//             </p>
//         </a>

//         <a href="/register" className="field">
//             <p className="control">
//                 <button className="button is-link" > Register </button>
//             </p>
//         </a>
//     </div>
// </div>
