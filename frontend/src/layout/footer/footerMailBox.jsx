import React from "react";

const FooterMailBox = () => {
  return (
    <div className="footer__mailBox">
      <h2 className="heading-secondary">Get a free estimate</h2>
      <p className="description">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. approaches lverall value proposition. Organically grow the
        holistic world view of disruptive.
      </p>
      <div className="footer__subscribe u-d-flex-a-center">
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
  );
};

export default FooterMailBox;
