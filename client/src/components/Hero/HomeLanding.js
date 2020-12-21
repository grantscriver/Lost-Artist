import React from "react";

import "./HomeLanding.css";

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
            <p className="fontTwo">
              Lost Artist Clothing Collaboration is a place where fashion designers from the upper midwest states - locations typically overlooked in the fashion community - can feature and sell their work. We give designers the ability to create profiles to share who they are, their experience, and a platform for shoppers to connect with them for potentially commissioned work, exposure, and a place to show support for their local designers and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
