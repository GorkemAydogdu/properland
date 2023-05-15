import React from "react";
import Container from "./container";
import PlayButton from "@/assets/PlayButton.svg";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="intro">
      <Container>
        <section className="intro__details">
          <h4 className="heading-quaternary u-text-uppercase">
            <span className="heading-count">01</span> Properland Intro
          </h4>
          <h2 className="heading-secondary">
            Buying & Selling Property In An Easy Way
          </h2>
          <p className="description">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi.
          </p>
          <ul className="intro__points">
            <li className="intro__pointItem u-d-flex-a-center">
              <div className="intro__dotWrap u-d-flex-a-j-center">
                <div className="intro__dot"></div>
              </div>
              <span className="intro__text">Only pay when you use</span>
            </li>
            <li className="intro__pointItem u-d-flex-a-center">
              <div className="intro__dotWrap u-d-flex-a-j-center">
                <div className="intro__dot"></div>
              </div>
              <span className="intro__text">Affordable and modern</span>
            </li>
            <li className="intro__pointItem u-d-flex-a-center">
              <div className="intro__dotWrap u-d-flex-a-j-center">
                <div className="intro__dot"></div>
              </div>
              <span className="intro__text">24/7 support</span>
            </li>
          </ul>
        </section>
        <section className="intro__image u-d-flex-a-j-center">
          <div className="intro__firstCircle u-d-flex-a-j-center">
            <div className="intro__secondCircle u-d-flex-a-j-center">
              <div className="intro__playButton u-d-flex-a-j-center">
                <Image src={PlayButton} alt="Play Button" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Intro;
