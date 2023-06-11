import React from "react";
import Header from "@/layout/header/header";
import Agency from "@/components/agency";
import Container from "./container";

import LeftParcitle from "@/assets/LeftParticle.png";
import RightParcitle from "@/assets/RightParticle.png";
import ArrowRight from "@/assets/ArrowRightYellow.svg";

import Image from "next/image";

const Banner = ({ agency, title, image, description, button, className }) => {
  return (
    <section className={`banner ${className === undefined ? "" : className}`}>
      <Container>
        <Header />
        {agency !== undefined && title !== undefined && (
          <section className="banner__content">
            <div className="banner__text">
              {agency !== undefined && <Agency>{agency}</Agency>}
              {title !== undefined && (
                <h1 className="heading-primary">{title}</h1>
              )}
              {description !== undefined && (
                <p className="description">{description}</p>
              )}
              {button !== undefined && (
                <a href="/" className="button button--white button--hover">
                  {button} <Image src={ArrowRight} alt="Arrow Right" />
                </a>
              )}
            </div>
            {image !== undefined && (
              <div className="banner__ImageWrap">
                <img className="banner__thumb" src={image} alt="" />
              </div>
            )}
          </section>
        )}

        {className !== "banner__fullImage" && (
          <>
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
          </>
        )}
      </Container>
    </section>
  );
};

export default Banner;
