import React from "react";

import Container from "./container";

const Counter = () => {
  return (
    <section className="counter">
      <Container>
        <div className="counter__item u-d-flex-a-center">
          <span className="heading-secondary">56,180</span>
          <p className="description">In Property sales</p>
        </div>
        <div className="counter__item u-d-flex-a-center">
          <span className="heading-secondary">99%</span>
          <p className="description">Customer satisfaction</p>
        </div>
        <div className="counter__item u-d-flex-a-center">
          <span className="heading-secondary">25K+</span>
          <p className="description">Property Transaction</p>
        </div>
        <div className="counter__item u-d-flex-a-center">
          <span className="heading-secondary">2,918</span>
          <p className="description">Price Reduce</p>
        </div>
      </Container>
    </section>
  );
};

export default Counter;
