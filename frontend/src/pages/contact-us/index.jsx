import React from "react";
import Head from "next/head";
import Banner from "@/components/banner/banner";
import Faq from "@/components/faq/faq";
import Footer from "@/layout/footer/footer";
import Counter from "@/components/counter/counter";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Properland - Webflow HTML website template</title>
      </Head>
      <>
        <Banner
          agency="Contact Us"
          title="Contact us For More Information"
          description="Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          email="Properland@mail.com"
          phone="+ 7016 - 5060 - 1920"
          form={true}
        >
          <h2 className="heading-secondary">Location</h2>
          <p className="description">
            Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores.
          </p>
          <div className="banner__location">
            <div className="banner__location--item">
              <h3 className="heading-tertiary u-text-center">London</h3>
              <p className="description u-text-center">
                3803 Marquette Pl #5S San Diego, 92106
              </p>
            </div>
            <div className="banner__location--item">
              <h3 className="heading-tertiary u-text-center">Los Angeles</h3>
              <p className="description u-text-center">
                1000 S Westgate Ave. Los Angeles, 90049
              </p>
            </div>
          </div>
        </Banner>
        <Faq />
        <Counter className="counter__alternative" />
        <Footer />
      </>
    </>
  );
};

export default ContactPage;
