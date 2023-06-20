import React from "react";
import Head from "next/head";

import Banner from "@/components/banner/banner";
import About from "@/components/about/about";
import Footer from "@/layout/footer/footer";
import Experts from "@/components/experts/experts";
import Title from "@/components/title/title";

const AgentsPage = () => {
  return (
    <>
      <Head>
        <title>Agents - Properland - Webflow HTML website template</title>
      </Head>
      <>
        <Banner
          agency="Property Experts"
          title="Meet Our Agents"
          className="banner__fullImage"
          fullImage="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/635a2b16aac5001c4d8c9115_agents-banner.jpg"
        />
        <Experts />
        <About>
          <Title
            count="01"
            subTitle="About Us"
            title="42+ years of helping you find the right Propertys"
          />
        </About>
        <Footer />
      </>
    </>
  );
};

export default AgentsPage;
