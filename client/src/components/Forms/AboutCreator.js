import React from "react";


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
             <option value='hat'>HATS</option>
             <option value='shirt'>SHIRTS</option>
             <option value='hoodies'>HOODIES</option>
             <option value='shoes'>SHOES</option>
          </select>
          </div>
  );
  }

  export function DropDown(props) {
    return (
        <div className="form-group">
         <select name = 'color' id = 'colorselect'>
             <option value='red'>RED</option>
             <option value='black'>BLACK</option>
             <option value='white'>WHITE</option>
             <option value='blue'>BLUE</option>
             <option value='green'>GREEN</option>
             <option value='brown'>BROWN</option>
          </select>
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
  

