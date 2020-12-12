import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input type='text' className="form-control" {...props} />
    </div>
  );
  }

export function TextArea(props) {
  return (
      <div className="form-group">
        <textarea className="form-control" rows="50" {...props} />
      </div>
  );
  }

  export function DropDown(props) {
    return (
        <div className="form-group">
         <select name = 'category' id = 'catselect'>
             <option selected value='hat'>HATS</option>
             <option value='shirts'>SHIRTS</option>
             <option value='hoodies'>HOODIES</option>
             <option value='shoes'>SHOES</option>
          </select>
          </div>
  );
  }


  export function CheckBox(props) {
    return (
      <div className="form-group">
        <input type='checkbox' className="form-control" {...props} />
      </div>
  );
  } 

  export function FormBtn(props) {
    return (
      <button {...props} className="btn btn-success">
        {props.children}
      </button>
    );
  }
  

