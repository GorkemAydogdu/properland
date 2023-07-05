import React from "react";
import Container from "@/layout/container";
import Agency from "../agency/agency";

const Faq = () => {
  return (
    <section className="faq">
      <Container>
        <Agency children="Answers" />
        <h2 className="heading-secondary u-text-center">
          Frequntly Asked Questions
        </h2>
        <div className="faq__content">
          <div className="faq__item">
            <div
              className="faq__question"
              onClick={(event) => {
                event.currentTarget.parentElement.classList.toggle(
                  "faq__item--active"
                );
              }}
            >
              <h3 className="faq__title">
                How do I prepare my home before I sell it?
              </h3>
              <button className="faq__button u-d-flex-a-j-center">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/636348ece3d9f811cb04f65a_faq-plus.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="faq__answer">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua.
                Scelerisque eleifend donec pretium vulputate sapien nec
                sagittis. Proin libero nunc consequat interdum. Condimentum
                lacinia quis vel eros donec ac. Mauris sit amet massa vitae
                tortor. Quisque id diam vel quam elementum pulvinar.
              </p>
            </div>
          </div>
          <div className="faq__item">
            <div
              className="faq__question"
              onClick={(event) => {
                event.currentTarget.parentElement.classList.toggle(
                  "faq__item--active"
                );
              }}
            >
              <h3 className="faq__title">
                How do I prepare my home before I sell it?
              </h3>
              <button className="faq__button u-d-flex-a-j-center">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/636348ece3d9f811cb04f65a_faq-plus.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="faq__answer">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua.
                Scelerisque eleifend donec pretium vulputate sapien nec
                sagittis. Proin libero nunc consequat interdum. Condimentum
                lacinia quis vel eros donec ac. Mauris sit amet massa vitae
                tortor. Quisque id diam vel quam elementum pulvinar.
              </p>
            </div>
          </div>
          <div className="faq__item">
            <div
              className="faq__question"
              onClick={(event) => {
                event.currentTarget.parentElement.classList.toggle(
                  "faq__item--active"
                );
              }}
            >
              <h3 className="faq__title">
                How do I prepare my home before I sell it?
              </h3>
              <button className="faq__button u-d-flex-a-j-center">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/636348ece3d9f811cb04f65a_faq-plus.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="faq__answer">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua.
                Scelerisque eleifend donec pretium vulputate sapien nec
                sagittis. Proin libero nunc consequat interdum. Condimentum
                lacinia quis vel eros donec ac. Mauris sit amet massa vitae
                tortor. Quisque id diam vel quam elementum pulvinar.
              </p>
            </div>
          </div>
          <div className="faq__item">
            <div
              className="faq__question"
              onClick={(event) => {
                event.currentTarget.parentElement.classList.toggle(
                  "faq__item--active"
                );
              }}
            >
              <h3 className="faq__title">
                How do I prepare my home before I sell it?
              </h3>
              <button className="faq__button u-d-flex-a-j-center">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/636348ece3d9f811cb04f65a_faq-plus.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="faq__answer">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua.
                Scelerisque eleifend donec pretium vulputate sapien nec
                sagittis. Proin libero nunc consequat interdum. Condimentum
                lacinia quis vel eros donec ac. Mauris sit amet massa vitae
                tortor. Quisque id diam vel quam elementum pulvinar.
              </p>
            </div>
          </div>
          <div className="faq__item">
            <div
              className="faq__question"
              onClick={(event) => {
                event.currentTarget.parentElement.classList.toggle(
                  "faq__item--active"
                );
              }}
            >
              <h3 className="faq__title">
                How do I prepare my home before I sell it?
              </h3>
              <button className="faq__button u-d-flex-a-j-center">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/636348ece3d9f811cb04f65a_faq-plus.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="faq__answer">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua.
                Scelerisque eleifend donec pretium vulputate sapien nec
                sagittis. Proin libero nunc consequat interdum. Condimentum
                lacinia quis vel eros donec ac. Mauris sit amet massa vitae
                tortor. Quisque id diam vel quam elementum pulvinar.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
