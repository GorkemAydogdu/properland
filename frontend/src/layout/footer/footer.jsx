import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__logo">
            <Image src={Logo} alt="Logo" />
            <div className="footer__social">
              <a href="/">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6315ddcfcaf1237b55aa5066_social-icon-1.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6315dfde52ad874787df9c26_social-icon-2.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6315dfe7caf1234cc0aa5c49_social-icon-3.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6315dfefde256195932f0e77_social-icon-4.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6315dff7267b7da1e8cff608_social-icon-5.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="footer__mailBox">
            <h2 className="heading-secondary">Get a free estimate</h2>
            <p className="description">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. approaches lverall value proposition. Organically
              grow the holistic world view of disruptive.
            </p>
            <div className="footer__subscribe">
              <input
                type="email"
                placeholder="your email address here"
                className="footer__input"
              />
              <a href="/" className="button button--dark">
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
