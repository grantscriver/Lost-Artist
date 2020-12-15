import React, { useEffect, useState } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
// import axios from "axios";
// import ItemColumn from "../../components/column/ItemColumn";
import Wrapper from "../../components/Wrapper/Wrapper"
import ItemDetails from "./itemdetails";

import { app } from "../../base";

const db = app.firestore();

function Shop() {
  const [item, setItem] = React.useState([]);

  useEffect(() => {
    const fetchItem = async () => {
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
      <div className="column  is-full is-offset-3 is-9 ">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
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
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
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
            <li>
              <NavLink to="/shop">All</NavLink>
            </li>
            <li>
              <NavLink to="/shop/hats">Hats</NavLink>
            </li>
            <li>
              <NavLink to="/shop/shirts">Shirts</NavLink>
            </li>
            <li>
              <NavLink to="/shop/hoodies">Hoodies</NavLink>
            </li>
            <li>
              <NavLink to="/shop/shoes">Shoes</NavLink>
            </li>
          </Menu>
        </div>
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
          <Route path={`/shop/item/:id`} component={ItemDetails} />
        </Wrapper>
      </div>
    </>
  );
}

export default Shop;
