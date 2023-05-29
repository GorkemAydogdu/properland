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
        <div className="footer__main">
          <div className="footer__links">
            <div className="footer__link">
              <h3 className="heading-tertiary">Company</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="/" className="description">
                    About
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Blog
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Properties
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Agents
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Services
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__link">
              <h3 className="heading-tertiary">Services</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="/" className="description">
                    Rent A Home
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Sell A Home
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Buy A Home
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Property Insurance
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Member Support
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Experience Agent
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__link">
              <h3 className="heading-tertiary">Utility Pages</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="/" className="description">
                    Style Guide
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Licenses
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Changelog
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Password
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    Not Found
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="description">
                    More Templates
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__contact">
            <h3 className="heading-tertiary">Contact Us</h3>
            <div className="footer__infos">
              <div className="footer__info">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6315e8de142485043abc3b20_footer-contact-icon-1.svg"
                  alt="Location"
                />
                <p className="description">
                  329 Queensberry Street, NorthMelbourne VIC 3051, Australia.
                </p>
              </div>
              <div className="footer__info">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6315e969d5958180ffd4afca_footer-contact-icon-2.svg"
                  alt="Phone"
                />
                <p className="description">123 456 7890</p>
              </div>
              <div className="footer__info">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6315e9ab597de7ee69a11a5a_footer-contact-icon-3.svg"
                  alt="Email"
                />
                <p className="description">support@properland.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="footer__copyright description u-text-center">
          Copyright © Properland | Designed by VictorFlow - Powered by Webflow.
        </p>
      </Container>
    </section>
  );
};

export default Footer;
