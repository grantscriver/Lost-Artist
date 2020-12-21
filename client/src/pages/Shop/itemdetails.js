import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import "./itemdtails.css";

function ItemDetails() {
  const [item, setItem] = useState([]);
  const [artist, setArtist] = useState([]);
  let URL = window.location.pathname;
  let search = URL.lastIndexOf("/");
  let resultId = URL.substring(search + 1);

  // -------- From backend API/database/sequelize -------
  useEffect(() => {
    axios
      .get("/api/items/?id=" + resultId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
        let artId = res.data[0].artistId;
        axios
          .get("/api/creators?id=" + artId, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res.data);
            setArtist(res.data);
          });
      });
  }, []);

  const addToCart = async (e) => {
    e.preventDefault();
    let sizeValue = e.target.size.value;
    if (!sizeValue) {
      alert("You need to select a size");
      return;
    }
    let shopItem = {
      id_size: item[0].id + sizeValue,
      id: item[0].id,
      image: item[0].image,
      style_name: item[0].style_name,
      size: sizeValue,
      quantity: 1,
      price: item[0].price,
    };
    let existingCartItems = localStorage.getItem("shopItems") || "[]";
    let existingCartItemsArr = JSON.parse(existingCartItems);
    if (existingCartItems.includes(shopItem.id_size)) {
      let itemExist = existingCartItemsArr.find(
        ({ id_size }) => id_size === shopItem.id_size
      );
      let totalPrice = itemExist.price;
      itemExist.quantity = itemExist.quantity + 1;
      itemExist.price = itemExist.quantity * totalPrice;
      let updatedQtyItem = [...existingCartItemsArr];
      localStorage.setItem("shopItems", JSON.stringify(updatedQtyItem));
      alert("this item quanity has been updated cart");
    } else {
      existingCartItemsArr.push(shopItem);
      localStorage.setItem("shopItems", JSON.stringify(existingCartItemsArr));
      alert("the item has been added to the cart");
    }
  };

  return (
    <div className="container-fluid has-background-grey-light full">
      <div className="columns">
        <div className="column is-one-fifth has-background-grey-light">
          <Menu>
            <li>
              <Link to="/shop">All</Link>
            </li>
            <li>
              <Link to="/shop/hats">Hats</Link>
            </li>
            <li>
              <Link to="/shop/shirts">Shirts</Link>
            </li>
            <li>
              <Link to="/shop/hoodies">Hoodies</Link>
            </li>
            <li>
              <Link to="/shop/shoes">Shoes</Link>
            </li>
          </Menu>
        </div>
        <div className="column has-background-grey-light">
          <div className="columns">
            <div className="column is-one-quarter">
              {item.length > 0 && (
                <img
                  alt={item[0].style_name}
                  className="item-image"
                  src={item[0].image}
                  key={item[0].id_size}
                />
              )}
            </div>
            <div className="column is-three-quarters has-background-grey">
              <ul>
                {item.length > 0 && (
                  <li className="title is-4" key={item[0].id_size}>
                    {item[0].style_name}
                  </li>
                )}
                <form className="control" onSubmit={addToCart}>
                  <input type="radio" name="size" value="small" />
                  <label htmlFor="small"> Small </label>
                  <input type="radio" name="size" value="medium" />
                  <label htmlFor="medium"> Medium </label>
                  <input type="radio" name="size" value="large" />
                  <label htmlFor="large"> Large </label>
                  {/* className="title is-5 */}
                  <br />
                  <button className="font">
                    {/* <Link className="title is-5" to="/cart"> */}
                    Add to Cart
                    {/* </Link> */}
                  </button>
                </form>

                <div className="level"></div>
                <div className="level"></div>
                {artist.length > 0 && (
                  <div>
                    <li className="title is-4">Creator Info:</li>
                    <Link
                      className="title is-5"
                      to={`/creators/${artist[0].id}`}
                    >
                      <img
                        className="creator-image"
                        src={artist[0].image}
                        alt={artist[0].artist_name}
                      />
                      <p>{artist[0].artist_name}</p>
                    </Link>
                  </div>
                )}
                {item.length > 0 && (
                  <div>
                    <li className="title is-4">About item:</li>
                    <p>{item[0].description}</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
