import React from "react";

import Container from "../../layout/container";

const Counter = ({ className, children }) => {
  return (
    <section className={`counter ${className === undefined ? "" : className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Counter;
