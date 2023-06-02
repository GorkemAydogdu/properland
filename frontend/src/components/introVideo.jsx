import React from "react";
import Container from "./container";

import Title from "./title";

const IntroVideo = ({ children }) => {
  return (
    <section className="introVideo">
      <Container>
        <div className="introVideo__image">
          <img
            src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e7681735609aec58b7ec0_about-intro-image.jpg"
            alt=""
          />
        </div>
        <div className="introVideo__details">
          <Title
            count="01"
            subTitle="Intro Video"
            title="Buying & Selling Property In An Easy Way"
            className="introVideo__text"
          />
          <p className="description">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi.
          </p>
          {children}
        </div>
      </Container>
    </section>
  );
};

export default IntroVideo;
