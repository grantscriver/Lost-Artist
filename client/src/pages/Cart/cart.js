import React, { useState, useEffect, useRef } from "react";
import CartItem from "../../components/CartItems/CartItems";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";

function Cart() {
  const itemStore = useRef(localStorage.shopItems);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
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
    localStorage.setItem("shopItems", JSON.stringify(updatedItemStoreDel));
    setCart(updatedItemStoreDel);
    if (!localStorage.shopItems || localStorage.shopItems === "[]") {
      setTotal(0);
    } else {
      let cartPrice = updatedItemStoreDel.map((item) => item.price);
      let cartTotal = cartPrice.reduce(findSum);
      setTotal(cartTotal);
    }
  };

  const editQty = async (e) => {
    let qtyDrop = e.target.value;
    let qtyId = e.target.name;
    let findItemEdit = cart.find(({ id_size }) => id_size === qtyId);
    let getItemById = findItemEdit.id;
    let getItem = await axios
      .get(`/api/items/?id=${getItemById}`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((res) => res.data);
    let getItemPrice = getItem[0].price;
    findItemEdit.quantity = qtyDrop;
    findItemEdit.price = qtyDrop * getItemPrice;
    let updatedItemStoreEdit = [...cart];
    localStorage.setItem("shopItems", JSON.stringify(updatedItemStoreEdit));
    setCart(updatedItemStoreEdit);
    let cartPrice = updatedItemStoreEdit.map((item) => item.price);
    let cartTotal = cartPrice.reduce(findSum);
    setTotal(cartTotal);
  };

  const handleToken = async (token, addresses) => {
    const response = await axios.post("/checkout", { token, cart, total });
    const { status } = response.data;
    console.log("Response:", response.data);
    setCart([]);
    setTotal(0);
    localStorage.setItem("shopItems", "[]");
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
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
                  key={item.id_size}
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
            <StripeCheckout
              stripeKey="pk_test_51I0KPoKLsfdtr6IvmO29xVxXdWI9HXoreKI30ARaDXdvXOnXxpMiVrMXQMBxGIdmq2XnJXOeIHLJzj9oBxkNFaYD00JgnIa6YJ"
              token={handleToken}
              amount={total * 100}
              billingAddress
              shippingAddress
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
