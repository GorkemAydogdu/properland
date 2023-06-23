import React from "react";
import Head from "next/head";
import Banner from "@/components/banner/banner";
import Property from "@/components/property/property";
import Title from "@/components/title/title";
import Footer from "@/layout/footer/footer";

const AgentsDetailPage = () => {
  return (
    <>
      <Head>
        <title>Agents Details</title>
      </Head>
      <>
        <Banner
          className="banner__agent"
          agency="Selling Agent"
          title="Darly Dixon"
          description="Distinctively re-engineer revolutionary meta-services and premium 
 At vero eos et accusamus et iusto Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          email="darly-dixon@mail.com"
          phone="+ 716 - 560 - 1920"
          image="https://assets.website-files.com/63525de8322ba72165834b06/635a47d6dfb4935e9e0971f0_agent-image-1.jpg"
        />
        <Property>
          <Title
            title="Properties for sale in your favorite area"
            subTitle="PROPERTIES"
            count="01"
            className="property__text u-text-center"
          />
        </Property>
        <Footer />
      </>
    </>
  );
};

export default AgentsDetailPage;
