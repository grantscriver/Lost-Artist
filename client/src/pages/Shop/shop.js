import React, { useEffect, useState } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import ItemDetails from "./itemdetails";
import axios from "axios";

function CreatorSelectFilter({ artist_name, id }) {
  return <option value={id}>{artist_name}</option>;
}

function StateSelectFilter() {
  return (
    <>
      <option value="1">IA</option>
      <option value="3">MI</option>
      <option value="2">MN</option>
      <option value="4">ND</option>
      <option value="5">SD</option>
      <option value="6">WI</option>
    </>
  );
}

function Shop() {
  const [dbItems, setDbItems] = useState([]);
  const [creators, setCreators] = useState([]);
  let queryString = window.location.search;

  useEffect(() => {
    if (queryString) {
      getAllItems(queryString);
    } else {
      axios.get(`/api/items`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((res) => setDbItems(res.data));
    }

    getAllItems(queryString);
    getAllCreators();
  }, [queryString]);

  function getAllItems(query) {
    axios.get(`/api/items/${query}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res) => setDbItems(res.data));
  }

  function getAllCreators() {
    axios.get("/api/creators", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res) => setCreators(res.data));
  }

  function handleInputChange(event) {
   
    let name = event.target.name;
    let value = event.target.value;
  

    if (name === "state" && value !== 0) {
      getAllItems(`?state_id=${value}`);
    } else if (name === "creator" && value !== 0) {
      getAllItems(`?artistId=${value}`);
    } else {
      getAllItems();
    }
  }

  return (
    <>
      <div className="column  is-full is-offset-3 is-9 ">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="select">
              <select
                className="font"
                name="state"
                id="creatorSelect"
                defaultValue={"DEFAULT"}
                onChange={handleInputChange}
              >
                <option value="0">All States</option>
                <StateSelectFilter />
              </select>
            </div>

            <div className="select space-left">
              <select
                className="font"
                name="creator"
                id="creatorSelect"
                defaultValue={"DEFAULT"}
                onChange={handleInputChange}
              >
                <option value="0">All Creators</option>
                {creators &&
                  creators.map(creator => {
                    return <CreatorSelectFilter key={creator.id} {...creator} />
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="level"></div>
      <div className="columns">
        <div className="column is-one-fifth">
          <Menu>
            <li key="all">
              <NavLink to="/shop">All</NavLink>
            </li>
            <li key="hats">
              <NavLink to="/shop/?category=hats">Hats</NavLink>
            </li>
            <li key="shirts">
              <NavLink to="/shop/?category=shirts">Shirts</NavLink>
            </li>
            <li key="hoddies">
              <NavLink to="/shop/?category=hoodies">Hoodies</NavLink>
            </li>
            <li key="shoes">
              <NavLink to="/shop/?category=shoes">Shoes</NavLink>
            </li>
          </Menu>
        </div>
        <Wrapper>
          {dbItems.length > 0 &&
            dbItems.map((item) => {
              return (
                <div className="column is-3" key={item.id}>
                  <div className="card">
                    <Link to={`/shop/item/${item.id}`}>
                      <div className="card-image">
                        <figure className="image is-3by4">
                          <img src={item.image} alt={item.style_name} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">{item.style_name}</p>
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
