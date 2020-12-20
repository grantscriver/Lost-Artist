import React from "react";
import { Link } from "react-router-dom";
//test

const CartDropDown = () => {
  if (!localStorage.shopItems || localStorage.shopItems === "[]") {
    return (
      <div>
        <h3>no items</h3>
      </div>
    );
  }

  let itemStore = JSON.parse(localStorage.shopItems);
  return (
    <>
      {itemStore.map((item) => {
        return (
          <div className="dropdown-item" key={item.id_size}>
            <Link to={`/shop/item/${item.id}`}>
              <div className="columns">
                <div className="column">
                  <img src={item.image} alt={item.style_name} />
                </div>
                <div className="column">{item.style_name}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default CartDropDown;
