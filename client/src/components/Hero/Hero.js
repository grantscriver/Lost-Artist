import React from 'react';


//change to class component
function Hero({ children }) {
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
        <section className="hero is-success is-fullheight has-background-grey-light">
            <div className="hero-body">
                <div className="container">
                    {children}
                </div>
            </div>
        </section>

    )
}

export default Hero