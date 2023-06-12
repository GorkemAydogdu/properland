import React from "react";

const IntroPoints = () => {
  return (
    <>
      <ul className="intro__points">
        <li className="intro__pointItem u-d-flex-a-center">
          <div className="intro__dotWrap u-d-flex-a-j-center">
            <div className="intro__dot"></div>
          </div>
          <span className="intro__text">Only pay when you use</span>
        </li>
        <li className="intro__pointItem u-d-flex-a-center">
          <div className="intro__dotWrap u-d-flex-a-j-center">
            <div className="intro__dot"></div>
          </div>
          <span className="intro__text">Affordable and modern</span>
        </li>
        <li className="intro__pointItem u-d-flex-a-center">
          <div className="intro__dotWrap u-d-flex-a-j-center">
            <div className="intro__dot"></div>
          </div>
          <span className="intro__text">24/7 support</span>
        </li>
      </ul>
    </>
  );
};

export default IntroPoints;
