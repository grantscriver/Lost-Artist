import React, { useEffect, useState } from "react";
import axios from "axios";

//change to class component
function Hero({ children }) {
  return (
    <section className="hero has-background-grey-light is-fullheight">
      <div className="hero-body">
        {/* <div className="container">{children}</div> */}
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="placeholder-four">
                
              </div>
            </div>
            <div className="column">
              <div className="placeholder-two"></div>
            </div>
            <div className="column">
              <div className="placeholder-one"></div>
            </div>
            <div className="column">
              <div className="placeholder-three"></div>
            </div>
          </div>

        </div>
        
        
        
        
      </div>
    </section>
  );
}

export default Hero;
