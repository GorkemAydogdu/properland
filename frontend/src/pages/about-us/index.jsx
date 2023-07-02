import React from "react";
import Head from "next/head";

import Banner from "@/components/banner/banner";
import IntroVideo from "@/components/intro/introVideo";
import Process from "@/components/process/process";
import Testimonial from "@/components/testimonial/testimonial";
import LearnMore from "@/components/learnMore/learnMore";
import Counter from "@/components/counter/counter";
import Experts from "@/components/experts/experts";
import Brands from "@/components/brands/brands";
import Footer from "@/layout/footer/footer";

import Title from "@/components/title/title";

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
        <IntroVideo image="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e7681735609aec58b7ec0_about-intro-image.jpg">
          <Title
            count="01"
            subTitle="Intro Video"
            title="Buying & Selling Property In An Easy Way"
            className="introVideo__text"
          />
          <p className="description">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi.
          </p>
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
        <Process>
          <Title
            count="02"
            subTitle="Process"
            title="Our Main Focus"
            className="u-text-center"
          />
        </Process>
        <Testimonial />
        <LearnMore />
        <Counter className="counter__alternative"></Counter>
        <Experts>
          <Title
            count="03"
            title="Our Property Team"
            subTitle="Experts"
            className="u-text-center"
          />
        </Experts>
        <Brands />
        <Footer />
      </>
    </React.Fragment>
  );
};

export default AboutPage;
