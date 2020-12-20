import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CategorySelect, ColorSelect } from "../../components/Forms/DropSelect";
import { CreatorInfo, NoCreatorInfo } from "../../components/column/CreatorAbout";
import ItemCard from "../../components/Card/ItemCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import axios from "axios";




function Loggedinprofile() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    const [items, setItems] = useState([]);
    const [creator, setCreator] = useState({});
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const { id } = creator;

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

            console.log(e.message);
          }
        };

        getUserMetadata();

        const callSecureApi = async() => {
            try {
                const token = await getAccessTokenSilently();
                
                axios.get(`${serverUrl}/api/creators/${user.email}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then(res => {
                    if(res.data.length === 0) {
                        console.log("No match found in database.")
                    } else {
                        setCreator(res.data);
                        transitionIdToState(res.data.stateId);
                        getItemsByUser(res.data.id);    
                        console.log(res.data);
                    }  
                })
            } catch (e) {
                console.log(e);
            }

        };

        callSecureApi();

      }, []);

    

      function getItemsByUser(id) {
        axios.get(`/api/items/?artistId=${id}`)
        .then(res => {
            console.log(res.data);
            setItems(res.data);
        })
      }

      function transitionIdToState(id) {
            switch (id) {
                case 1:
                    setCreator(creator => ({...creator, artist_state: "IA"}))
                    break;
                case 2:
                    setCreator(creator => ({...creator, artist_state: "MN"}))
                    break;
                case 3:
                    setCreator(creator => ({...creator, artist_state: "MI"}))
                    break;
                case 4:
                    setCreator(creator => ({...creator, artist_state: "ND"}))
                    break;
                case 5: 
                    setCreator(creator => ({...creator, artist_state: "SD"}))
                    break;
                case 6: 
                    setCreator(creator => ({...creator, artist_state: "WI"}))
                    break;
                default:
                    console.log("No State set.")
            }
            
      }

     

    return (
        <>
        <div className="card" >
            <div className="columns">
                <div className="column is-3 is-offset-1">
                    <img src="https://bulma.io/images/placeholders/480x640.png" alt="placeholder" />
                </div>
                {isAuthenticated && creator.artist_name
                    ? <CreatorInfo {...creator} />
                    : <NoCreatorInfo />
                }
                <div className="column is-3">
                    {creator.id 
                        ?   <Link to={`/private/profile/edit/${id}`}><button className="button is-black">Edit</button></Link>
                        :   <Link to={`/private/profile/create`}><button className="button is-black">Add My Info</button></Link>
                    }
                    
                    
                </div>
            </div>
        </div>

        <div className="level"></div>
        <div className="level"></div>

        <div className="columns">
            <div className="space-left column is-two-thirds">
                <Link to="/private/profile/add-item">
                    <button className="button is-black">Add Item to Collection</button>
                </Link>
            </div>
            <div className="column is-justify-content-space-around">
                <CategorySelect />
                
            </div>
        </div>

        <div className="level"></div>
        <div className="level"></div>

        <section className="space-left">
            <div className="columns">
                <Wrapper>
                    {items.length > 0 
                        ?  items.map((item) => {
                            return <ItemCard key={item.id}{...item} />
                        })
                        : <div className="column">
                            <p>There are no items in your collection yet.</p>
                            <p> Click "Add Item to Collection" to add an item.</p>  
                        </div>
                    }
                </Wrapper>
            </div>
        </section>
        
        </>
    )
}

export default Loggedinprofile
