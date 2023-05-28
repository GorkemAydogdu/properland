import React from "react";
import Container from "./container";

const Blog = () => {
  return (
    <section className="blog">
      <Container>
        <div className="u-text-center">
          <h4 className="heading-quaternary u-text-uppercase">
            <span className="heading-count">07</span> Blog
          </h4>
          <h2 className="heading-secondary">Latest Articles</h2>
        </div>
        <div className="blog__content u-d-flex-a-center">
          <div className="blog__item">
            <a className="blog__image" href="/">
              <img
                src="https://assets.website-files.com/63525de8322ba72165834b06/6352899753e8c5356b6dd19f_thumbnail-image-1.jpg"
                alt=""
              />
            </a>
            <div className="blog__text u-text-center">
              <p className="description">
                <span>November 05, 2021</span>
                <span className="blog__line">|</span>
                <span>Architecture</span>
              </p>
              <a href="/" className="blog__title">
                Here’s how to decorate your new home from scratch
              </a>
            </div>
          </div>
          <div className="blog__item">
            <a className="blog__image" href="/">
              <img
                src="https://assets.website-files.com/63525de8322ba72165834b06/635289a9a5de21d3e6f6a292_thumbnail-image-2.jpg"
                alt=""
              />
            </a>
            <div className="blog__text u-text-center">
              <p className="description">
                <span>December 14, 2021</span>
                <span className="blog__line">|</span>
                <span>Market Manager</span>
              </p>
              <a href="/" className="blog__title">
                Home buying basics: How many Kitchans and bedrooms?
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
