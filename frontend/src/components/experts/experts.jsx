import React from "react";

import Container from "@/layout/container";
import ExpertsItem from "./expertsItem";

const Experts = ({ children }) => {
  return (
    <section className="experts">
      <Container>
        {children}
        <div className="experts__content">
          <ExpertsItem />
        </div>
      </Container>
    </section>
  );
};

export default Experts;
