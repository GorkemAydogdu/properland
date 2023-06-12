import React from "react";
import Container from "../../layout/container";
import Image from "next/image";

import ArrowRight from "@/assets/ArrowRightDark.svg";
const About = ({ children }) => {
  return (
    <section className="about">
      <Container>
        <div className="about__text">
          {children}
          <p className="description">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto
          </p>
          <p className="description">
            Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="/" className="button button--more button--hover">
            Learn More
            <Image src={ArrowRight} alt="Arrow Right" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default About;
