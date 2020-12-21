import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { StateDropDown } from "../../components/Forms/EditCreatorfile";
import CreatorColumn from "../../components/column/CreatorColumn";
import axios from 'axios';
import Wrapper from '../../components/Wrapper/Wrapper';

function Creator () {
    const [creators, setCreators] = useState([]);
  
    useEffect(() => {
        getAllCreators();
       
    }, [])

    
    function handleInputChange(event) {
        let value = event.target.value;
        let numVal = parseInt(value);
        console.log(numVal);
        
        if (numVal > 0) {
            console.log(numVal);
            getCreatorsByState(numVal);
        } else {
            getAllCreators();
           
        }
    }

    function getCreatorsByState(id) {
        axios.get(`/api/creators/?stateId=${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        })
            .then(res => {
                
                console.log(res.data);
                setCreators(res.data);
                // console.log("/api/creators/filter/?state=MN&color=Red")
            })
    }
    
    function getAllCreators() {
        axios.get("/api/creators", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        })
        .then(res => {
            console.log(res.data);
            setCreators(res.data)
        })
    }

    return (
        <>
        <div className="level">
                <form className="level-item">
                    <StateDropDown onChange={handleInputChange} />
                </form>
        </div>

        <div className="columns">
                
            <div className="column is-one-fifth has-background-white">
                <aside className="menu has-text-centered">
                    <p className="menu-label">
                        IA
                    </p>
                        <ul className="menu-list">
                        {creators.length > 0 &&
                                creators.map((creator, i) => {
                                    if(creator.stateId === 1) {
                                        return <li key={creator.id}><Link to={`/creators/${creator.id}`}>{creator.artist_name}</Link></li>
                                    } else {
                                        return null
                                    }
                            })
                        }
                        </ul>
                    <p className="menu-label">MN</p>
                        <ul className="menu-list">
                        {creators.length > 0 &&
                                creators.map((creator, i) => {
                                    if(creator.stateId === 2) {
                                        return <li key={creator.id}><Link to={`/creators/${creator.id}`}>{creator.artist_name}</Link></li>
                                    } else {
                                        return null
                                    }
                            })
                        }
                        </ul>
                    <p className="menu-label">MI</p>
                        <ul className="menu-list">
                            {creators.length > 0 &&
                                    creators.map((creator, i) => {
                                        if(creator.stateId === 3) {
                                            return <li key={creator.id}><Link to={`/creators/${creator.id}`}>{creator.artist_name}</Link></li>
                                        } else {
                                            return null
                                        }
                                })
                            }
                        </ul>
                    <p className="menu-label">ND</p>
                        <ul className="menu-list">
                            {creators.length > 0 &&
                                    creators.map((creator, i) => {
                                        if(creator.stateId === 4) {
                                            return <li key={creator.id}><Link to={`/creators/${creator.id}`}>{creator.artist_name}</Link></li>
                                        } else {
                                            return null
                                        }
                                })
                            }
                        </ul>
                    <p className="menu-label">SD</p>
                        <ul className="menu-list">
                            {creators.length > 0 &&
                                    creators.map((creator, i) => {
                                        if(creator.stateId === 5) {
                                            
                                            return <li key={creator.id}><Link to={`/creators/${creator.id}`}>{creator.artist_name}</Link></li>
                                        } else {
                                            return null
                                        }
                                })
                            }
                        </ul>
                    <p className="menu-label">WI</p>
                        <ul className="menu-list">
                            {creators.length > 0 &&
                                    creators.map((creator, i) => {
                                        if(creator.stateId === 6) {
                                            return <li key={creator.id}><Link href={`/creators/${creator.id}`}>{creator.artist_name}</Link></li>
                                        } else {
                                            return null
                                        }
                                    })
                            }
                        </ul>
                    </aside>
            </div>
            
 
            <Wrapper>
                {creators.length > 0 && 
                    creators.map((creator, i) => {
                        return (
                    <Link key={creator.id} to={`/creators/${creator.id}`}> 
                                            
                        <CreatorColumn  {...creator} />
                    </Link>
                        )
                    })
                }
            </Wrapper>

        </div>
    </>
    )   
}

export default Creator