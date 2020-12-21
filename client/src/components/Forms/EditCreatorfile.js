import React from "react";


function Input({ name, children, onChange, placeholder }) {

  return (
    <div className="field">
      <label>{children}</label>
      <div className="control">

        <input type="text" className="input" placeholder={placeholder} name={name} onChange={onChange}>

        </input>
      </div>
    </div>

  );
}

function AboutTextArea({ onChange }) {
  return (
    <div className="field">
      <label>About:</label>
      <div className="control">
        <textarea className="textarea" name="about" rows="10" onChange={onChange} />
      </div>
    </div>

  );
}

function StateDropDown({ onChange }) {
  return (
    <div className="field">
      <label className="font">State:</label>
      <div className="control">
        <div className="select">
          <select className="font" defaultValue={"0"} name="state" id="stateselect" onChange={onChange}>
            <option value="0">All</option>
            <option value="1">IA</option>
            <option value="3">MI</option>
            <option value="2">MN</option>
            <option value="4">ND</option>
            <option value="5">SD</option>
            <option value="6">WI</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function FormBtn({ children }) {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-dark">
          {children}
        </button>
      </div>
    </div>

  );
}

export {
  Input,
  AboutTextArea,
  StateDropDown,
  FormBtn
};


