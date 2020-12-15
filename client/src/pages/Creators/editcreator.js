import React, {useState} from 'react';
import {Input, DropDown, TextArea, FormBtn} from '../../components/Forms/EditCreatorfile'

function Artist() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event)
    
  };
    return (
        <form>
                         
              <Input
                onChange={handleInputChange}
                name="ArtistName"
                placeholder="ARTIST NAME"
                value={formObject.artistname}
              />

              <Input
                onChange={handleInputChange}
                name="ArtistCity"
                placeholder="ARTIST CITY"
                value={formObject.artistcity}
              />  

              <DropDown
                onChange={handleInputChange}
                name="state"
                value={formObject.artiststate}
              />

             <label for='about'>ABOUT</label> 
             
              <TextArea
                onChange={handleInputChange}
                name="AboutArtist"
                placeholder="ABOUT THE ARTIST"
                value={formObject.aboutartist}
              />
              <label for='contact'>CONTACT</label>
        
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="ARTIST EMAIL"
                value={formObject.artistemail}
              />
               <Input
                onChange={handleInputChange}
                name="instagram"
                placeholder="ARTIST INSTA"
                value={formObject.artistinsta}
              />
              
              <FormBtn
                disabled={!(formObject.artistname && formObject.artiststate)}
                onClick={handleFormSubmit}
              >
                Submit Artist

              </FormBtn>
          </form>
    )
    }

export default Artist