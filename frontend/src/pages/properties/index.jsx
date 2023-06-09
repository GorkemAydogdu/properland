import React from "react";
import Head from "next/head";

import Banner from "@/components/banner";
import Property from "@/components/property";
import Neighborhoods from "@/components/neighborhoods";
import Footer from "@/layout/footer/footer";

const PropertiesPage = () => {
  return (
    <>
      <Head>
        <title>Properties - Properland - Webflow HTML website template</title>
      </Head>
      <>
        <Banner
          className="banner__alternative"
          agency="Properties"
          title="Browse properties"
          image="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/6353b43b4d0d410a6f933c83_property-banner.png"
          key={Math.random()}
        />
        <Property />
        <Neighborhoods />
        <Footer />
      </>
    </>
  );
};

export default PropertiesPage;
