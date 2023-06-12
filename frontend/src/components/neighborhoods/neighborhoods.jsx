import React from "react";

import Container from "../../layout/container";
import NeighborhoodsCard from "./neighborhoodsCard";

const Neighborhoods = ({ children }) => {
  return (
    <section className="neighborhoods">
      <Container>
        {children}
        <div className="neighborhoods__content">
          <NeighborhoodsCard />
        </div>
      </Container>
    </section>
  );
};

export default Neighborhoods;
