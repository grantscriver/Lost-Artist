import React, {useState} from 'react';
import {Input, DropDown, TextArea, FormBtn} from '../../components/Forms/Creatorfile'

function Creators() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event)
    
  };
    return (
        <form>
                         
              <Input
                onChange={handleInputChange}
                name="ItemName"
                placeholder="ITEM NAME"
                value={formObject.itemname}
              />
             
              <TextArea
                onChange={handleInputChange}
                name="AboutItem"
                placeholder="ABOUT THE ITEM"
                value={formObject.aboutitem}
              />
              <label for='category'>CATEGORY</label>

              <DropDown
                onChange={handleInputChange}
                name="category"
                value={formObject.category}
              />

             <label for='small_qty'>QTY OF SIZE SMALL</label>   
              <Input
                onChange={handleInputChange}
                name="small_qty"
                placeholder="0"
                value={formObject.small_qty}
              />
              <label for='medium_qty'>QTY OF SIZE MEDIUM</label>  
              <Input
                onChange={handleInputChange}
                name="medium_qty"
                placeholder="0"
                value={formObject.medium_qty}
              />
              <label for='large_qty'>QTY OF SIZE LARGE</label> 
              <Input
                onChange={handleInputChange}
                name="large_qty"
                placeholder="0"
                value={formObject.large_qty}
              />

              <FormBtn
                disabled={!(formObject.itemname && formObject.category)}
                onClick={handleFormSubmit}
              >
                Submit Item

              </FormBtn>
          </form>
    )
    }

export default Creators