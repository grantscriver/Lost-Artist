import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import {CategorySelect, ColorSelect} from "../../components/Forms/DropSelect";
import { CreatorInfo } from "../../components/column/CreatorAbout";
import ItemCard from "../../components/Card/ItemCard";
import axios from "axios";





function  PublicProfile() {
    const [creator, setCreator] = useState({});
    const [items, setItems] = useState([]);
    const { id } = creator;

    let URL = window.location.pathname;
    let search = URL.lastIndexOf("/");
    let resultId = URL.substring(search + 1);
    console.log(resultId);

    useEffect(() => {
        axios.get(`/api/public/creator/${resultId}`)
        .then(res => {
            console.log(res.data)
            setCreator(res.data);
            transitionIdToState(res.data.stateId);
            getItemsByUser(res.data.id);
        })        
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
                        <img src={creator.image || "https://bulma.io/images/placeholders/480x640.png"} alt="placeholder" />
                    </div>
                    {creator.artist_name 
                        ? <CreatorInfo {...creator} />
                        : <p>This creator has no info to display.</p>

                    }
                </div>
            </div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="columns">
                <div className="space-left column is-two-thirds">
                    {/* placeholder column to push Cat & Color dropdowns right */}
                </div>
                <div className="column is-justify-content-space-around">
                    <CategorySelect />
                    <ColorSelect spacing={"space-left"}/>
                </div>
            </div>
            <div className="level"></div>
            <div className="level"></div>
            <section className="space-left">
                <div className="columns is-flex-justify-content-center">
                    <Wrapper>
                        {items.length > 0 &&
                            items.map((item) => {
                                return <ItemCard key={id}{...item} />
                                
                            })}
                    </Wrapper>
                </div>
            </section>
        </>
    )
}

export default PublicProfile;
