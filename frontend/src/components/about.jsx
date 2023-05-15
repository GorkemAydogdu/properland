import React from "react";
import Container from "./container";
import PlayButton from "@/assets/PlayButton.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="about">
      <Container>
        <section className="about__details">
          <h3 className="heading-quaternary u-text-uppercase">
            <span className="heading-count">01</span> Properland Intro
          </h3>
          <h2 className="heading-secondary">
            Buying & Selling Property In An Easy Way
          </h2>
          <p className="description">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi.
          </p>
          <ul className="about__points">
            <li className="about__pointItem u-d-flex-a-center">
              <div className="about__dotWrap u-d-flex-a-j-center">
                <div className="about__dot"></div>
              </div>
              <span className="about__text">Only pay when you use</span>
            </li>
            <li className="about__pointItem u-d-flex-a-center">
              <div className="about__dotWrap u-d-flex-a-j-center">
                <div className="about__dot"></div>
              </div>
              <span className="about__text">Affordable and modern</span>
            </li>
            <li className="about__pointItem u-d-flex-a-center">
              <div className="about__dotWrap u-d-flex-a-j-center">
                <div className="about__dot"></div>
              </div>
              <span className="about__text">24/7 support</span>
            </li>
          </ul>
        </section>
        <section className="about__image u-d-flex-a-j-center">
          <div className="about__firstCircle u-d-flex-a-j-center">
            <div className="about__secondCircle u-d-flex-a-j-center">
              <div className="about__playButton u-d-flex-a-j-center">
                <Image src={PlayButton} alt="Play Button" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default About;
