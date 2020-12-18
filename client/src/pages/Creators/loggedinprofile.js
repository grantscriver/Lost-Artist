import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "../../components/Wrapper/Wrapper";
import {CategorySelect, ColorSelect} from "../../components/Forms/DropSelect";
import axios from "axios";

import { app } from "../../base";


function Loggedinprofile() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    const [item, setItem] = useState([]);
    const [creator, setCreator] = useState({});
    const db = app.firestore();
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const { id, artist_name, artist_email, artist_instagram } = creator;

    useEffect(() => {
        const getUserMetadata = async () => {
          const domain = process.env.REACT_APP_AUTH0_DOMAIN;
      
          try {
            const accessToken = await getAccessTokenSilently({
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
      
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
      
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            const { user_metadata } = await metadataResponse.json();
      
            setUserMetadata(user_metadata);
          } catch (e) {

            console.log(e.message, " hello");
          }
        };

        getUserMetadata();

        const callSecureApi = async() => {
            try {
                const token = await getAccessTokenSilently();
                console.log(user.email);
                axios.get(`${serverUrl}/api/creators/${user.email}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then(res => {
                
                    console.log(res.data);
                    setCreator(res.data);
                    transitionIdToState(res.data.stateId)
                })
            } catch (e) {
                console.log(e);
            }

        }
        callSecureApi();

        
        const fetchItem = async () => {
            // Change this query to item specific when database is ready            
            const itemCollection = await db.collection("item").get();
            setItem(
                itemCollection.docs.map((doc) => {
                    return doc.data();
                })
            );
        };
        fetchItem();
      }, []);

    
      function transitionIdToState(id) {
            switch (id) {
                case 1:
                    setCreator(creator => ({...creator, state_abbr: "IA"}))
                    break;
                case 2:
                    setCreator(creator => ({...creator, state_abbr: "MN"}))
                    break;
                case 3:
                    setCreator(creator => ({...creator, state_abbr: "MI"}))
                    break;
                case 4:
                    setCreator(creator => ({...creator, state_abbr: "ND"}))
                    break;
                case 5: 
                    setCreator(creator => ({...creator, state_abbr: "SD"}))
                    break;
                case 6: 
                    setCreator(creator => ({...creator, state_abbr: "WI"}))
                    break;
                default:
                    console.log("No State set.")
            }
            
      }

      console.log(creator)

    return (
        <>
            
            <div className="card" >
                <div className="columns">
                    <div className="column is-3 is-offset-1">
                        <img src="https://bulma.io/images/placeholders/480x640.png" alt="placeholder" />
                    </div>
                    {isAuthenticated && (
                        <div className="column is-5">
                            <p className="title is-4">{artist_name}</p>
                            <p className="title is-5">{creator.state_abbr}</p>
                            <br></br>
                            <p>
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                
                            <div className="level"></div>
                            <div className="level"></div>
                            <div className="level"></div>
                            <div className="level"></div>
                            <div className="columns">
                                <div className="column is-one-quarter">
                                    <h1 className="title is-4">Contact:</h1>
                                </div>
                                <div className="column is-one-quarter is-offset-one-half">
                                    <a className="icon" href={`https://instagram.com/${artist_instagram}`} >
                                        <i className="fab fa-instagram fa-3x"></i>
                                    </a>

                                    <a className="icon is-pulled-right" href={`mailto:${artist_email}`}>
                                        <i className="far fa-envelope fa-3x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="column is-3">
                        <Link to={`/private/profile/edit/${id}`}><button className="button is-black">Edit</button></Link>
                        <div >
                        </div>
<<<<<<< HEAD

=======
>>>>>>> 19f898b402b5a91b3fc5b820cc5a8d0da4d38264
                    </div>
                </div>
            </div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="columns">
                <div className="space-left column is-two-thirds">
                    <Link to="/private/profile/add-item">
                        <button class="button is-black">Add</button>
                    </Link>
                </div>
                <div className="column is-justify-content-space-around">

                    <CategorySelect />
                    <ColorSelect spacing={"space-left"}/>
<<<<<<< HEAD

=======
>>>>>>> 19f898b402b5a91b3fc5b820cc5a8d0da4d38264
                </div>
            </div>
            <div className="level"></div>
            <div className="level"></div>
            <section className="space-left">
                <div className="columns">
                    <Wrapper>
                        {item.length > 0 &&
                            item.map((item) => {
                                return (
                                    <div className="column is-3" key={item.id}>
                                        <div className="card">
                                            <Link to={`/shop/item/${item.id}`}>
                                                <div className="card-image">
                                                    <figure className="image is-3by4">
                                                        <img src={item.pic} alt={item.name} />
                                                    </figure>
                                                </div>
                                                <div className="card-content">
                                                    <div className="media">
                                                        <div className="media-content">
                                                            <p className="title is-4">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                    </Wrapper>
                </div>
            </section>
        
        </>
    )
}

export default Loggedinprofile