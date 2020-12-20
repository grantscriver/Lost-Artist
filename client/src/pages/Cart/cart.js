import React, { useState, useEffect, useRef } from "react";
import CartItem from "../../components/CartItems/CartItems";
import "./cart.css";

function Cart() {
  const itemStore = useRef(localStorage.shopItems);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  let findSum = (a, v) => a + v;

  useEffect(() => {
    if (!localStorage.shopItems || localStorage.shopItems === "[]") {
      return <div>Currently you have no items in the cart</div>;
    } else {
      itemStore.current = JSON.parse(localStorage.shopItems);
      setCart(itemStore.current);
      let cartPrice = itemStore.current.map((item) => item.price);
      let cartTotal = cartPrice.reduce(findSum);
      setTotal(cartTotal);
    }
  }, []);

  const deleteItem = (e) => {
    let delButtonId = e.target.name;
    let findItemDel = cart.findIndex(({ id_size }) => id_size === delButtonId);
    cart.splice(findItemDel, 1);
    let updatedItemStoreDel = [...cart];
    let cartPrice = updatedItemStoreDel.map((item) => item.price);
    let cartTotal = cartPrice.reduce(findSum);
    localStorage.setItem("shopItems", JSON.stringify(updatedItemStoreDel));
    setCart(updatedItemStoreDel);
    setTotal(cartTotal);
  };

  const editQty = (e) => {
    let qtyDrop = e.target.value;
    let qtyId = e.target.name;
    let findItemEdit = cart.find(({ id_size }) => id_size === qtyId);
    let totalPrice = findItemEdit.price;
    findItemEdit.quantity = qtyDrop;
    findItemEdit.price = qtyDrop * totalPrice;
    let updatedItemStoreEdit = [...cart];
    localStorage.setItem("shopItems", JSON.stringify(updatedItemStoreEdit));
    setCart(updatedItemStoreEdit);
  };
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column has-background-grey-light">
            <h1>CART</h1>
          </div>
        </div>
        <div className="column">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  deleteItem={deleteItem}
                  editQty={editQty}
                  {...item}
                />
              );
            })
          ) : (
            <div>You currently have no items in your cart</div>
          )}
        </div>
        <div className="column">
          <div>
            TOTAL: ${total}
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
