import React from 'react';
import Navbar from '../Navbar/Navbar';

//change to class component
function Body() {
    //Set state for img
    // state = {
    //     img: ""
    // }

    //     const unsplash = new Unsplash({
    //         applicationId: process.env.UNSPLASH_ACCESS_KEY,
    //         secret: process.env.UNSPLASH_SECRET_KEY
    //     });

    //     componentDidMount() {
    //     unsplash.search.photos("cats", 1)
    //         .then(toJson)
    //         .then(json => {
    //             // Do something with the json object
    //             this.setState({
    //                 img: json
    //             })
    //         });
    //     }
    return (
        <section class="hero is-success is-fullheight has-background-grey-light">
            <div class="hero-body">
                <div class="container">
                    <figure class=".upload-img">
                        <img src="https://images.pexels.com/photos/1868475/pexels-photo-1868475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </figure>
                </div>
            </div>
        </section>

    )
}

export default Body