import React from "react";
import Header from "@/layout/header/header";
import Agency from "@/components/agency/agency";
import Container from "../../layout/container";

import LeftParcitle from "@/assets/LeftParticle.png";
import RightParcitle from "@/assets/RightParticle.png";
import ArrowRight from "@/assets/ArrowRightYellow.svg";

import Image from "next/image";
import Form from "../form/form";

const Banner = ({
  agency,
  title,
  image,
  description,
  button,
  className,
  fullImage,
  email,
  phone,
  form,
  children,
}) => {
  return (
    <section
      style={{
        background: `url(${fullImage === undefined ? "" : fullImage}) ${
          fullImage !== undefined && "50% 50% no-repeat"
        }`,
      }}
      className={`banner ${className === undefined ? "" : className}`}
    >
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
              {email !== undefined && (
                <div className="banner__info u-d-flex-a-center">
                  <img
                    src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e99d4c3259435a6796ca3_contact-link-icon-1.svg"
                    alt=""
                  />
                  <p className="description">{email}</p>
                </div>
              )}
              {phone !== undefined && (
                <div className="banner__info u-d-flex-a-center">
                  <img
                    src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634fb9d7bb51ca969ced2a83_contact-link-icon-2.svg"
                    alt=""
                  />
                  <p className="description">{phone}</p>
                </div>
              )}
              {children}
            </div>
            {image !== undefined && (
              <div className="banner__ImageWrap">
                <img className="banner__thumb" src={image} alt="" />
              </div>
            )}
            {form !== undefined && (
              <Form>
                <h2 className="heading-secondary">Quick Contact</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </Form>
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
