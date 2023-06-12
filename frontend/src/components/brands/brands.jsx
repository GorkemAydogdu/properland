import React from "react";
import Container from "@/layout/container";
import Image from "next/image";
import ArrowRight from "@/assets/ArrowRightYellow.svg";
import BradsItem from "./brandsItem";

const Brands = () => {
  return (
    <section className="brands">
      <Container>
        <h3 className="heading-tertiary u-text-center">
          More than 50+ Brands Trusted World Wide
        </h3>
        <div className="brands__content">
          <BradsItem />
        </div>
        <a href="/" className="button button--white button--hover">
          Explore Now
          <Image src={ArrowRight} alt="" />
        </a>
      </Container>
    </section>
  );
};

export default Brands;
