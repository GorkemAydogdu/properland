import React from "react";
import Container from "./container";

const RichText = ({
  headingSecondary,
  descriptionFirst,
  descriptionSecond,
  headingTertiary,
  descriptionThird,
}) => {
  return (
    <div className="richtext">
      <h2 className="heading-secondary">{headingSecondary}</h2>
      <p className="description">
        {descriptionFirst === undefined ? "" : descriptionFirst}
        {descriptionFirst !== undefined && (
          <>
            <br /> <br />
          </>
        )}
        Appropriately empower dynamic leadership skills after business portals.
        Globally my cardinate interactive supply chains with distinctive quality
        vectors global sources services. Uniquely matrix economically sound
        value through cooperative technology. Competently parallel task fully
        researched data and enterprise process improvements.
      </p>
      <ul>
        <li>
          Dynamically target high-payoff intellectual capital for customized
        </li>
        <li>Interactively procrastinate high-payoff content</li>
        <li>
          Credibly reinter mediate backend ideas for cross-platform models
        </li>
      </ul>
      {descriptionSecond !== undefined && (
        <p className="description">{descriptionSecond}</p>
      )}
      <blockquote>
        “Democracy must be built through open societies that share information.
        When there is information, there is enlightenment. When there is no
        sharing of power, no rule of law, no accountability, there is abuse,
        corruption and indignation.”
      </blockquote>
      <h3 className="heading-tertiary">{headingTertiary}</h3>
      <p className="description">
        Collaboratively administrate empowered markets via plug-and-play
        networks. Dynamically procrastinate B2C users after installed base
        benefits. Dramatically visualize customer directed convergence without
        revolutionary ROI.
      </p>
      <ol>
        <li>
          It brings the right people together with all the right information and
          tools to get work done
        </li>
        <li>
          We provide operational efficiency, data security, and flexible scale
        </li>
        <li>
          Your best work, together in one package that works seamlessly from
          your computer
        </li>
        <li>
          Delivers the tools you need to save time Improve field performance
          always
        </li>
      </ol>
      {descriptionThird !== undefined && (
        <p className="description">{descriptionThird}</p>
      )}
    </div>
  );
};

export default RichText;
