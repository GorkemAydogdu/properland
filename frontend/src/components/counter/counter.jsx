import React from "react";

import Container from "../../layout/container";
import CounterItems from "./counterItems";

const Counter = ({ className }) => {
  return (
    <section className={`counter ${className === undefined ? "" : className}`}>
      <Container>
        <CounterItems />
      </Container>
    </section>
  );
};

export default Counter;
