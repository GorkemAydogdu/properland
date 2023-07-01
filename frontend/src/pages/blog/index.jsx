import React from "react";
import Head from "next/head";
import Banner from "@/components/banner/banner";
import Blog from "@/components/blog/blog";
import Title from "@/components/title/title";
import Container from "@/layout/container";
import Brands from "@/components/brands/brands";
import Footer from "@/layout/footer/footer";

import Image from "next/image";
import ArrowRight from "@/assets/ArrowRightDark.svg";
import Link from "next/link";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog - Properland - Webflow HTML website template</title>
      </Head>
      <>
        <Banner
          agency="About Land"
          title="Articles & Resources"
          image="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634e7523366b0ffd0bdc5f90_about-banner.png"
          className="banner__alternative"
        />
        <div className="blog__single">
          <Container>
            <Link href="/blogDetail" className="blog__image">
              <img
                src="https://assets.website-files.com/63525de8322ba72165834b06/635289dae80e50492ed284c3_thumbnail-image-5.jpg"
                alt=""
              />
            </Link>
            <div className="blog__text">
              <p className="description">
                <span>November 05, 2021</span>
                <span className="blog__line">|</span>
                <span>Architecture</span>
              </p>
              <Link href="/blogDetail" className="blog__title">
                How to Cash Out My Home Equity if I Have Bad Credit Score
              </Link>
              <p className="description">
                Podcasting on low-hanging fruit to identify a ballpark value
                added activity to beta test override matrix economically the
                digital.
              </p>
              <a href="/" className="button button--more button--hover">
                View More
                <Image src={ArrowRight} alt="Arrow Right" />
              </a>
            </div>
          </Container>
        </div>
        <Blog>
          <Title
            className="u-text-center"
            count="01"
            subTitle="Blog"
            title="Latest Articles"
          />
        </Blog>
        <Brands />
        <Footer />
      </>
    </>
  );
};

export default BlogPage;
