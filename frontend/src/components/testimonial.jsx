import React, { useEffect } from "react";
import Container from "./container";

//Splidejs
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

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
            <div className="testimonial__item splide__slide">
              <div className="testimonial__message">
                <p className="description">
                  Properland team was fantastic! We met at a house showing over
                  a year ago and he took time out of their day to describe the
                  home buying process to us. In the following year we found the
                  house.
                </p>
              </div>
              <div className="testimonial__user">
                <div className="testimonial__image">
                  <img
                    src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e3ed7d0a404f4a646a437_testimonial-client-image-1.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial__name">
                  <span className="heading-tertiary">Andrew John</span>
                  <span className="description">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="testimonial__item splide__slide">
              <div className="testimonial__message">
                <p className="description">
                  Unlike most brokers they are honest, friendly, helpful, and
                  truly caring. I knew right when we first met that we had a lot
                  in common and that I could trust to send me listings that
                  wouldn’t be a waste.
                </p>
                <p className="description">
                  I’m grateful to have worked with properland and will surely
                  want to work with again.
                </p>
              </div>
              <div className="testimonial__user">
                <div className="testimonial__image">
                  <img
                    src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e4c2051a84ec42f0bee9f_testimonial-client-image-2.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial__name">
                  <span className="heading-tertiary">Lucia Torren</span>
                  <span className="description">Selling Customer</span>
                </div>
              </div>
            </div>
            <div className="testimonial__item splide__slide">
              <div className="testimonial__message">
                <p className="description">
                  I used Properland to sell my house in south Manchester, they
                  first came our to give me a valuation which I was happy with
                  the interest generated and the speed of the whole process.
                </p>
              </div>
              <div className="testimonial__user">
                <div className="testimonial__image">
                  <img
                    src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e4c297acf0e77c1931a10_testimonial-client-image-3.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial__name">
                  <span className="heading-tertiary">Jared Leto</span>
                  <span className="description">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="testimonial__item splide__slide">
              <div className="testimonial__message">
                <p className="description">
                  I recently worked with properland in identifying and
                  purchasing an investment property in San Francisco, and they
                  made the process incredibly easy and comfortable.
                </p>
              </div>
              <div className="testimonial__user">
                <div className="testimonial__image">
                  <img
                    src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e4c3142c3529247e8cd85_testimonial-client-image-4.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial__name">
                  <span className="heading-tertiary">Emily Blunt.</span>
                  <span className="description">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="testimonial__item splide__slide">
              <div className="testimonial__message">
                <p className="description">
                  We used Properland to buy our first house, they were very
                  helpful and professional always quick in responding to our
                  emails and giving us regular updates. We would highly
                  recommend them.
                </p>
              </div>
              <div className="testimonial__user">
                <div className="testimonial__image">
                  <img
                    src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e4c8651a84e16c90bf44e_testimonial-client-image-5.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial__name">
                  <span className="heading-tertiary">Oliver Frank</span>
                  <span className="description">Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
