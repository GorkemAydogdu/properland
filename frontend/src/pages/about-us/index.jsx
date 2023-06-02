import React from "react";
import Head from "next/head";

import Banner from "@/components/banner";

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
      </>
    </React.Fragment>
  );
};

export default AboutPage;
