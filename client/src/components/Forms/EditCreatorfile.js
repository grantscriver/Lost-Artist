import React from "react";

export function Input({name, children, onChange}) {
  return (
    <div className="field">
      <label>{children}</label>
      <div className="control">
        <input type='text' className="input" name={name} onChange={onChange}> 
         
        </input>
      </div>
    </div>
    
  );
  }

export function AboutTextArea({onChange}) {
  return (
    <div className="field">
      <label>About:</label>
      <div className="control">
        <textarea className="textarea" name="about" rows="10" onChange={onChange}/>
      </div>
    </div>
      
  );
  }

  export function StateDropDown({onChange}) {
    return (
      <div className="field">
        <label>State:</label>
        <div className="control">
          <div className="select">
            <select name='state' id='stateselect' onChange={onChange}>
              <option selected value='hat'>- -</option>
              <option value='1'>IA</option>
              <option value='3'>MI</option>
              <option value='2'>MN</option>
              <option value='4'>ND</option>
              <option value='5'>SD</option>
              <option value='6'>WI</option>
            </select>
          </div>
        </div>
      </div>
  );
  }

  export function FormBtn({children}) {
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
  

