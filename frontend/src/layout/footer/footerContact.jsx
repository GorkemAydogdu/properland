import React from "react";

const FooterContact = () => {
  return (
    <>
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
    </>
  );
};

export default FooterContact;
