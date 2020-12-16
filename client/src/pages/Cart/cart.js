import React from "react";
import CartItem from "../../components/CartItems/CartItems;";
import "./cart.css";

function Cart() {
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column has-background-grey-light">
            <h1>CART</h1>
          </div>
        </div>
        <div className="column">
          <CartItem />
        </div>
      </div>
    </>
  );
}

export default Cart;
