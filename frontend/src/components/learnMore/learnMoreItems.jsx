import React from "react";

import IntroCircle from "../intro/introCircle";
const LearnMoreItems = () => {
  return (
    <>
      <div className="learnMore__item u-d-flex-a-center">
        <div className="learnMore__image">
          <img
            src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e85e479bab3691fa92939_learnmore-image-1.jpg"
            alt=""
          />
        </div>
        <div className="learnMore__details">
          <h2 className="heading-secondary">
            Learn More About Who We Are in Real Estate
          </h2>
          <p className="description">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolore.
          </p>
        </div>
      </div>
      <div className="learnMore__item u-d-flex-a-center">
        <div className="learnMore__details">
          <h2 className="heading-secondary">We're reinventing the space</h2>
          <p className="description">
            To lead the industry requires the smartest tools built by the
            brightest minds across engineering design & strategy. Through our
            proprietary platform, We changing how agents and clients finding or
            selling a home.
          </p>
          <div className="learnMore__points">
            <h3 className="heading-tertiary">Full Services</h3>
            <p className="description">
              Our agents are trusted advisors, helping everyone from the
              first-time buyer to the seasoned seller make better, more informed
              decisions.
            </p>
            <h3 className="heading-tertiary">Safe Investments</h3>
            <p className="description">
              We’re bringing together the world’s sharpest, most creative
              professionals across real estate, engineering, business,
              marketing, and design.
            </p>
          </div>
        </div>
        <div className="learnMore__image u-d-flex-a-j-center">
          <IntroCircle />
        </div>
      </div>
    </>
  );
};

export default LearnMoreItems;
