import React, { useEffect } from "react";
import Container from "../../layout/container";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";
import TestimonialItem from "./testimonialItem";

const Testimonial = () => {
  useEffect(() => {
    let splide = new Splide(".splide", {
      perPage: 2,
      speed: 800,
      gap: "4rem",
      pagination: false,
      arrows: false,

      breakpoints: {
        1024: {
          perPage: 1,
        },
      },
    });

    splide.mount();
  }, []);

  return (
    <section className="testimonial">
      <Container>
        <div className="testimonial__text">
          <h2 className="heading-secondary">What our customers say about us</h2>
        </div>
        <div className="testimonial__buttons">
          <button className="testimonial__button">
            <div className="testimonial__icon">&lsaquo;</div>
          </button>
          <button className="testimonial__button">
            <div className="testimonial__icon">&rsaquo;</div>
          </button>
        </div>
      </Container>
      <div className="splide testimonial__content">
        <div className="splide__track testimonial__wrapper">
          <div className="splide__list">
            <TestimonialItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
