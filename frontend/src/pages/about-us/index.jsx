import React from "react";
import Head from "next/head";

import Banner from "@/components/banner";
import IntroVideo from "@/components/introVideo";
import Process from "@/components/process";
import Testimonial from "@/components/testimonial";
import LearnMore from "@/components/learnMore";
import Counter from "@/components/counter";
const AboutPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About Us - Properland - Webflow HTML website template</title>
      </Head>
      <>
        <Banner
          className="banner__alternative"
          agency="About Properland"
          title="About Our Real Estate"
          image="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e7523366b0ffd0bdc5f90_about-banner.png"
          key={Math.random()}
        />
        <IntroVideo>
          <div className="introVideo__points">
            <div className="introVideo__point">
              <img
                src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e7721129f987b91b622c1_about-intro-icon-1.svg"
                alt=""
              />
              <div className="introVideo__description">
                <h3 className="heading-tertiary">Our Vision</h3>
                <p className="description">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
            <div className="introVideo__point">
              <img
                src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e781e42c3526b32eaee31_about-intro-icon-2.svg"
                alt=""
              />
              <div className="introVideo__description">
                <h3 className="heading-tertiary">Our Mission</h3>
                <p className="description">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
          </div>
        </IntroVideo>
        <Process />
        <Testimonial />
        <LearnMore />
        <Counter className="counter__alternative" />
      </>
    </React.Fragment>
  );
};

export default AboutPage;
