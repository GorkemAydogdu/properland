import React from "react";

import Container from "../../layout/container";
import LearnMoreItems from "./learnMoreItems";

const LearnMore = () => {
  return (
    <section className="learnMore">
      <Container>
        <LearnMoreItems />
      </Container>
    </section>
  );
};

export default LearnMore;
