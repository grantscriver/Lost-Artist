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
         <select name = 'state' id = 'stateselect'>
             <option selected value='hat'>HATS</option>
             <option value='mn'>MN</option>
             <option value='wi'>WI</option>
             <option value='nd'>ND</option>
             <option value='sd'>SD</option>
             <option value='ia'>IA</option>
             <option value='il'>MI</option>
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
  

