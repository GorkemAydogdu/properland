import React from "react";
import Header from "@/layout/header/header";
import Agency from "@/components/agency";
import Title from "@/components/title";
import Container from "./container";

import LeftParcitle from "@/assets/LeftParticle.png";
import RightParcitle from "@/assets/RightParticle.png";
import ArrowRight from "@/assets/ArrowRight.svg";

import Image from "next/image";

const Banner = ({ agency, title, image, description, button }) => {
  return (
    <section className="banner">
      <Container>
        <Header />
        <section className="banner__content">
          <div className="banner__text">
            <Agency>{agency}</Agency>
            <Title>{title}</Title>
            {description !== undefined && (
              <p className="description">{description}</p>
            )}
            {button !== undefined && (
              <a href="/" className="button button--white">
                {button} <Image src={ArrowRight} alt="Arrow Right" />
              </a>
            )}
          </div>
          <div className="banner__ImageWrap">
            <Image className="banner__thumb" src={image} alt="" />
          </div>
        </section>
        <Image
          className="particle particle--left"
          src={LeftParcitle}
          alt="Left Particle"
        />
        <Image
          className="particle particle--right"
          src={RightParcitle}
          alt="Right Particle"
        />
      </Container>
    </section>
  );
};

export default Banner;
