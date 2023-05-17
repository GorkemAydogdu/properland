import React from "react";
import Container from "./container";

const Testimonial = () => {
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
      <div className="testimonial__content">
        <div className="testimonial__item">
          <div className="testimonial__message">
            <p className="description">
              Properland team was fantastic! We met at a house showing over a
              year ago and he took time out of their day to describe the home
              buying process to us. In the following year we found the house.
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
        <div className="testimonial__item">
          <div className="testimonial__message">
            <p className="description">
              Unlike most brokers they are honest, friendly, helpful, and truly
              caring. I knew right when we first met that we had a lot in common
              and that I could trust to send me listings that wouldn’t be a
              waste.
            </p>
            <p className="description">
              I’m grateful to have worked with properland and will surely want
              to work with again.
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
        <div className="testimonial__item">
          <div className="testimonial__message">
            <p className="description">
              Properland team was fantastic! We met at a house showing over a
              year ago and he took time out of their day to describe the home
              buying process to us. In the following year we found the house.
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
      </div>
    </section>
  );
};

export default Testimonial;
