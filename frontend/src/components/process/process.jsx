import React from "react";
import Container from "../../layout/container";
import ProcessItems from "./processItems";

const Process = ({ children }) => {
  return (
    <section className="process">
      <Container>
        {children}
        <div className="process__content">
          <ProcessItems />
        </div>
      </Container>
    </section>
  );
};

export default Process;
