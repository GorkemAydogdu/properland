import React from "react";
import Head from "next/head";

import Banner from "@/components/banner/banner";
import IntroVideo from "@/components/intro/introVideo";
import Title from "@/components/title/title";
import Process from "@/components/process/process";
import Service from "@/components/service/service";
import LearnMore from "@/components/learnMore/learnMore";
import Counter from "@/components/counter/counter";
import Footer from "@/layout/footer/footer";
const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services - Properland - Webflow HTML website template</title>
      </Head>
      <>
        <Banner
          agency="Services"
          title="We're Leading Land Market"
          image="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e8de4af420832c62420cf_services-banner.png"
        />
        <IntroVideo image="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e929568bd6f1d6957d0bf_about-intro-image-1.jpg">
          <Title
            count="01"
            subTitle="Intro Video"
            title="Buying & Selling Property In An Easy Way"
            className="introVideo__text"
          />
          <p className="description">
            As passionate entrepreneurs, but most importantly as family members
            and responsible citizens, we believe that the cornerstone of any
            business must rely on benefiting society while offering a
            transparent solution.
            <br /> <br />
            Our Mission is to be the most effective real estate platform by
            offering a transparent model that allows homeowners to sell their
            house and stay in it as a renters.
          </p>
          <div className="introVideo__mission">
            <h3 className="heading-tertiary">
              Rewriting the Real Estate Rulebook
            </h3>
            <p className="description">
              We’re all about taking community living to the next level. Being
              centered on luxurious integrated lifestyle.
            </p>
            <h3 className="heading-tertiary">One Connected Community </h3>
            <p className="description">
              We specialize in full service property management and real estate
              services to fit your needs as a landlord or owner.
            </p>
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
        <Service>
          <Title
            count="03"
            subTitle="Services"
            title="See How Can Help"
            className="u-text-center"
          />
        </Service>
        <LearnMore />
        <Counter className="counter__alternative" />
        <Footer />
      </>
    </>
  );
};

export default ServicesPage;
