import React from "react";
import Title from "./title";
import Container from "./container";

const Process = () => {
  return (
    <section className="process">
      <Container>
        <Title
          count="02"
          subTitle="Process"
          title="Our Main Focus"
          className="u-text-center"
        />
        <div className="process__content">
          <div className="process__item">
            <span className="process__count u-d-flex-a-j-center heading-secondary">
              01
            </span>
            <h3 className="heading-tertiary">Planning stage</h3>
            <p className="description">
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </p>
            <img
              className="process__line"
              src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e7f9779bab38e39a8ca99_focus-line-1.png"
              alt=""
            />
          </div>
          <div className="process__item">
            <span className="process__count u-d-flex-a-j-center heading-secondary">
              02
            </span>
            <h3 className="heading-tertiary">Development</h3>
            <p className="description">
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </p>
            <img
              src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e7fd0bf0dade508872a30_focus-line-2.png"
              alt=""
              className="process__line"
            />
          </div>
          <div className="process__item">
            <span className="process__count u-d-flex-a-j-center heading-secondary">
              03
            </span>
            <h3 className="heading-tertiary">New way of living</h3>
            <p className="description">
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </p>
            <img
              src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e7fdedf3e2f21654283ec_focus-line-3.png"
              alt=""
              className="process__line"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
