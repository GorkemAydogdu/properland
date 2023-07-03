import React from "react";
import Head from "next/head";
import Banner from "@/components/banner/banner";
import Faq from "@/components/faq/faq";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Properland - Webflow HTML website template</title>
      </Head>
      <>
        <Banner />
        <Faq />
      </>
    </>
  );
};

export default ContactPage;
