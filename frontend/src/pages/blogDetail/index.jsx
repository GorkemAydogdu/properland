import React from "react";
import Head from "next/head";

import Banner from "@/components/banner/banner";
import Container from "@/layout/container";
import Author from "@/components/author/author";
import Blog from "@/components/blog/blog";
import Title from "@/components/title/title";
import Footer from "@/layout/footer/footer";

const BlogDetailPage = () => {
  return (
    <>
      <Head>
        <title>
          How to Cash Out My Home Equity if I Have Bad Credit Score - Properland
          - Webflow HTML website template
        </title>
      </Head>
      <>
        <Banner
          className="banner__blogDetail"
          agency="OCTOBER 31, 2022 | ARCHITECTURE"
          title="How to Cash Out My Home Equity if I Have Bad Credit Score"
        >
          <div className="banner__author u-d-flex-a-center">
            <div className="banner__author--image">
              <img
                src="https://assets.website-files.com/63525de8322ba72165834b06/635f9d10c4e29d03a8c8f0e7_blog-author-3.jpg"
                alt=""
              />
            </div>
            <div className="banner__author--name">
              <p className="heading-tertiary">Deborah Roderick</p>
              <p className="description">Vloger</p>
            </div>
          </div>
        </Banner>
        <div className="richtext">
          <div className="richtext__image">
            <img
              src="https://assets.website-files.com/63525de8322ba72165834b06/635289e006ac0542075fe108_large-image-5.jpg"
              alt=""
            />
          </div>
          <Container>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="heading-secondary">Perfect Property For Building</h2>
            <p className="description">
              Appropriately empower dynamic leadership skills after business
              portals. Globally my cardinate interactive supply chains with
              distinctive quality vectors global sources services. Uniquely
              matrix economically sound value through cooperative technology.
              Competently parallel task fully researched data and enterprise
              process improvements.
            </p>
            <ul>
              <li>
                Dynamically target high-payoff intellectual capital for
                customized
              </li>
              <li>Interactively procrastinate high-payoff content</li>
              <li>
                Credibly reinter mediate backend ideas for cross-platform models
              </li>
            </ul>
            <blockquote>
              “Democracy must be built through open societies that share
              information. When there is information, there is enlightenment.
              When there is no sharing of power, no rule of law, no
              accountability, there is abuse, corruption and indignation.”
            </blockquote>
            <h3 className="heading-tertiary">
              Make real time a build services
            </h3>
            <p className="description">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <ol>
              <li>
                It brings the right people together with all the right
                information and tools to get work done
              </li>
              <li>
                We provide operational efficiency, data security, and flexible
                scale
              </li>
              <li>
                Your best work, together in one package that works seamlessly
                from your computer
              </li>
              <li>
                Delivers the tools you need to save time Improve field
                performance always
              </li>
            </ol>
          </Container>
        </div>
        <Author />
        <Blog>
          <Title title="Latest Article" className="u-text-center" />
        </Blog>
        <Footer />
      </>
    </>
  );
};

export default BlogDetailPage;
