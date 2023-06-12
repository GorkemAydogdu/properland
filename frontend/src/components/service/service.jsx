import React from "react";
import Container from "../../layout/container";
import ServiceRow from "./serviceRow";

const Service = ({ children }) => {
  return (
    <section className="service">
      <Container>
        {children}
        <div className="service__content">
          <ServiceRow />
        </div>
      </Container>
    </section>
  );
};

export default Service;
