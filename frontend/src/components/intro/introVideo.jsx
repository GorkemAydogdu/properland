import React from "react";
import Container from "../../layout/container";

const IntroVideo = ({ image, children }) => {
  return (
    <section className="introVideo">
      <Container>
        <div className="introVideo__image">
          <img src={image} alt="" />
        </div>
        <div className="introVideo__details">{children}</div>
      </Container>
    </section>
  );
};

export default IntroVideo;
