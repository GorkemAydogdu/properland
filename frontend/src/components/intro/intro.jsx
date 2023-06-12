import React from "react";

import Container from "@/layout/container";
import IntroPoints from "./introPoints";

const Intro = ({ children }) => {
  return (
    <section className="intro">
      <Container>
        <section className="intro__details">
          {children}
          <p className="description">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi.
          </p>
          <IntroPoints />
        </section>
        <section className="intro__image u-d-flex-a-j-center"></section>
      </Container>
    </section>
  );
};

export default Intro;
