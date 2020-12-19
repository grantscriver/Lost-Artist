import React from "react";


//change to class component
function Hero({ children }) {
  return (
    <section className="hero has-background-grey-light is-fullheight">
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </section>
  );
}

export default Hero;
