import React from "react";
//test
const CartItem = ({
  editQty,
  deleteItem,
  id_size,
  image,
  style_name,
  size,
  quantity,
  id,
}) => {
  return (
    <>
      <div className="card" key={id_size}>
        <div className="columns">
          <div className="column">
            <img src={image} alt={style_name} />
          </div>
          <div className="column">
            <h1>{style_name}</h1>
            <h1>Size: {size}</h1>
          </div>
          <div className="column">
            <label>QTY</label>
            <br />
            <div className="select" onChange={editQty}>
              <select
                className="dropdown"
                name={id_size}
                datatype={id}
                defaultValue={quantity}
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
              <button className="deleteButton icon" name={id_size}>
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
