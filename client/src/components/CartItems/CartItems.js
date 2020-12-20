import React, { useState, useEffect, useRef } from "react";
//test
const CartItem = () => {
  const itemStore = useRef(localStorage.shopItems);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!localStorage.shopItems || localStorage.shopItems === "[]") {
      return <div>Currently you have no items in the cart</div>;
    } else {
      itemStore.current = JSON.parse(localStorage.shopItems);
      console.log(itemStore.current);
      setCart(itemStore.current);
    }
  }, []);

  const deleteItem = (e) => {
    let delButtonId = e.target.name;
    let findItemDel = itemStore.findIndex(
      ({ id_size }) => id_size === delButtonId
    );
    itemStore.splice(findItemDel, 1);
    let updatedItemStoreDel = [...itemStore];
    localStorage.setItem("shopItems", JSON.stringify(updatedItemStoreDel));
    setCart(updatedItemStoreDel);
  };

  const editQty = (e) => {
    let qtyDrop = e.target.value;
    let qtyId = e.target.name;
    let findItemEdit = itemStore.find(({ id_size }) => id_size === qtyId);
    findItemEdit.quantity = qtyDrop;
    let updatedItemStoreEdit = [...itemStore];
    localStorage.setItem("shopItems", JSON.stringify(updatedItemStoreEdit));
    setCart(updatedItemStoreEdit);
  };

  return (
    <>
      {cart.length > 0 ? (
        cart.map((itemCart) => {
          return (
            <div className="card" key={itemCart.id_size}>
              <div className="columns">
                <div className="column">
                  <img src={itemCart.image} alt={itemCart.style_name} />
                </div>
                <div className="column">
                  <h1>{itemCart.style_name}</h1>
                  <h1>Size: {itemCart.size}</h1>
                </div>
                <div className="column">
                  <label>QTY</label>
                  <br />
                  <div className="select" onChange={editQty}>
                    <select
                      className="dropdown"
                      name={itemCart.id_size}
                      defaultValue={itemCart.quantity}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                <div className="column">
                  <div onClick={deleteItem}>
                    <button
                      className="deleteButton icon"
                      name={itemCart.id_size}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>You currently have no items in your cart</div>
      )}
    </>
  );
};

export default CartItem;
