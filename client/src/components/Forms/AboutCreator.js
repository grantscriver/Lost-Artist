import React from "react";


export function TextArea(props) {
  return (
      <div className="form-group">
        <textarea className="form-control" rows="50" {...props} />
      </div>
  );
  }

  export function CatDropDown(props) {
    return (
        <div className="form-group">
         <select name="category" id="catselect">
             <option selected>All</option>
             <option value="hat">Hats</option>
             <option value="shirt">Shirts</option>
             <option value="hoodies">Hoodies</option>
             <option value="shoes">Shoes</option>
          </select>
        </div>
  );
  }

  export function ColorDropDown(props) {
    return (
        <div className="form-group">
         <select name="color" id="colorselect">
             <option value="red">Red</option>
             <option value="black">Black</option>
             <option value="white">White</option>
             <option value="blue">Blue</option>
             <option value="green">Green</option>
             <option value="brown">Brown</option>
          </select>
          </div>
  );
  }

  export function FormBtn(props) {
    return (
      <button {...props} className="button is-success">
        {props.children}
      </button>
    );
  }
  

