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
          <div className="columns">
            <p className="font">
              Lost Artist Clothing Collaboration is a place where fashion designers from the upper midwest states - locations typically overlooked in the fashion community - can feature and sell their work.
              We give designers the ability to create profiles to share who they are, their experience, and a platform for shoppers to connect with them for potentially commissioned work and exposure. This
              site is also for people who want to buy and support local designers to directly impact their community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
