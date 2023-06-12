import React from "react";
import Container from "../../layout/container";

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
        <div className="introVideo__details">{children}</div>
      </Container>
    </section>
  );
};

export default IntroVideo;
