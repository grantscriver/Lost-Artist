import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Input, AboutTextArea, StateDropDown, FormBtn } from "../../components/Forms/EditCreatorfile";
import axios from "axios";


function Editcreator() {
  // db
  const [creator, setCreator] = useState([]);
  // auth0
  const { user, getAccessTokenSilently } = useAuth0();
  
  //form
  const [form, setForm] = useState({});
  // env
  
  let URL = window.location.pathname;
  let search = URL.lastIndexOf("/");
  let resultId = URL.substring(search + 1);
    
  
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        // const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        // const metadataResponse = await fetch(userDetailsByIdUrl, {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // });
  
        
      } catch (e) {

        console.log(e.message);
      }
    };
    getUserMetadata();

    

  }, [form]);


  function handleInputChange(event) {
    let {name, value} = event.target;
    
    setForm(form => ({...form, [name]: value}))
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    

    let formData = {
      artist_name: event.target.elements.name.value,
      artist_email: user.email,
      artist_instagram: event.target.elements.instagram.value,
      artist_city: event.target.elements.city.value,
      artist_about: event.target.elements.about.value,
      stateId: event.target.elements.state.value
    }
    console.log(formData);
    setCreator({...creator, formData })
    axios.put(`/api/edit/creators/${resultId}`, formData)
    .then(res => {
      console.log(res);
      setForm(form => ({ ...form,
        name: "",
        city: "",
        state: "",
        about: "",
        email: "",
        instagram: ""
      }))
    })
    

  }

  

  return (
    <section className="hero has-background-grey-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-1">
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-content has-text-centered">
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <p className="title is-4">
                    Click here
                  </p>
                  <div className="level"></div>
                  <p className="title is-4">
                    to add photo
                  </p>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item has-background-grey-light">
                    <span>
                      Recommended Size: 400x600
                    </span>
                  </p>
                </footer>
              </div>
            </div>
            <div className="column is-1">
            </div>
            <div className="column is-6">
              <form onSubmit={handleFormSubmit}>
                <Input name="name" value={form.name} placeholder={"Full Name"} onChange={handleInputChange}>Name:</Input>
                <Input name="city" value={form.city} placeholder={"City"}onChange={handleInputChange}>City:</Input>
                <StateDropDown value={form.state} onChange={handleInputChange}/>
                <AboutTextArea value={form.about} onChange={handleInputChange}/>               
                <Input name="instagram" value={form.instagram} placeholder={"Don't include the '@' symbol."}onChange={handleInputChange}>Instagram:</Input>
                <FormBtn>Save</FormBtn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Editcreator;