import React from "react";

import Container from "../../layout/container";
import WhyChooseRow from "./whyChooseRow";
const WhyChoose = ({ children }) => {
  return (
    <section className="whyChoose">
      <Container>
        {children}
        <div className="whyChoose__content">
          <WhyChooseRow />
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
