import React, { useEffect, useState } from 'react';
import axios from "axios";


//change to class component
function Hero({ children }) {
   

    return (
        <section class="hero has-background-grey-light is-fullheight">
            <div class="hero-body">
                <div class="container">
                { children }
                </div>
            </div>
        </section>

    )
}

export default Hero