import React from "react";

import Container from "@/layout/container";
import Image from "next/image";

import ArrowRight from "@/assets/ArrowRightYellow.svg";
import PropertyItem from "./propertyItem";

const Property = ({ children }) => {
  return (
    <section className="property">
      <Container>
        {children}
        <div className="property__content">
          <PropertyItem />
        </div>
        <a href="/" className="button button--white button--hover">
          Touch With Us
          <Image src={ArrowRight} alt="Arrow Right" />
        </a>
      </Container>
    </section>
  );
};

export default Property;
