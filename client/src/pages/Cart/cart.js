import React from "react";
import "./cart.css";

function Cart() {
  let itemStore = JSON.parse(localStorage.shopItems);

  const deleteItem = (e) => {
    let delButtonId = e.target.name;
    let findItemDel = itemStore.findIndex(({ id }) => id === delButtonId);
    itemStore.splice(findItemDel, 1);
    let updatedItemStoreDel = [...itemStore];
    localStorage.setItem("shopItems", JSON.stringify(updatedItemStoreDel));
  };

  const editQty = (e) => {
    let qtyDrop = e.target.value;
    let qtyId = e.target.name;
    let findItemEdit = itemStore.find(({ id }) => id === qtyId);
    findItemEdit.quantity = qtyDrop;
    let updatedItemStoreEdit = [...itemStore];
    localStorage.setItem("shopItems", JSON.stringify(updatedItemStoreEdit));
  };
  return (
    <>
      <div className="container has-background-grey-light">
        <div className="columns">
          <div className="column">
            <h1>CART</h1>
          </div>
        </div>
        {itemStore.length > 0 &&
          itemStore.map((itemCart) => {
            return (
              <div className="card" key={itemCart.id}>
                <div className="columns">
                  <div className="column">
                    <img src={itemCart.pic} alt={itemCart.name} />
                  </div>
                  <div className="column">
                    <h1>{itemCart.name}</h1>
                    <h1>Size: {itemCart.size}</h1>
                  </div>
                  <div className="column">
                    <label>QTY</label>
                    <br />
                    <div className="select" onChange={editQty}>
                      <select
                        className="dropdown"
                        name={itemCart.id}
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
                      <button className="deleteButton icon" name={itemCart.id}>
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Cart;
