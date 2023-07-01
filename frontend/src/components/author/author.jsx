import Container from "@/layout/container";
import React from "react";
import FooterSocial from "@/layout/footer/footerSocial";

const Author = () => {
  return (
    <div className="author">
      <Container>
        <div className="author__image">
          <img
            src="https://assets.website-files.com/63525de8322ba72165834b06/635f9d10c4e29d03a8c8f0e7_blog-author-3.jpg"
            alt=""
          />
        </div>
        <div className="author__content">
          <div className="author__info u-d-flex-a-center">
            <div className="author__name">
              <p className="heading-tertiary">Deborah Roderick</p>
              <p className="description">Vloger</p>
            </div>
            <FooterSocial />
          </div>
          <p className="description author__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Author;
