import React from "react";
import Head from "next/head";

import Banner from "@/components/banner/banner";
import Property from "@/components/property/property";
import Footer from "@/layout/footer/footer";

import Image from "next/image";
import Location from "@/assets/Location.svg";
import Bath from "@/assets/Bath.svg";
import Bed from "@/assets/Bed.svg";
import Car from "@/assets/Car.svg";
import Ruler from "@/assets/Ruler.svg";

import Title from "@/components/title/title";

import Container from "@/layout/container";
import Gallery from "@/components/gallery/gallery";

const PropertyDetailPage = () => {
  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>
      <>
        <Banner
          fullImage="https://assets.website-files.com/63525de8322ba72165834b06/6360de20701e5f70068a6216_property-large-image-8.jpg"
          className="banner__fullImage"
        />
        <div className="propertyContent">
          <Container>
            <div className="propertyDetails">
              <div className="propertyDetails__text">
                <div className="property__location">
                  <Image src={Location} alt="Location" />
                  <span>709 West Drive Chicago,IL 60606</span>
                </div>
                <h2 className="heading-secondary">Modern Loft in Land River</h2>
                <p className="description">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas. Dramatically .
                </p>
              </div>
              <div className="propertyDetails__features">
                <span className="property__price">$3500/Mo</span>
                <div className="property__details">
                  <div className="property__detail">
                    <Image src={Bed} alt="Bed" />
                    <span className="property__line"></span>
                    <span>3 Beds</span>
                  </div>
                  <div className="property__detail">
                    <Image src={Bath} alt="Bath" />
                    <span className="property__line"></span>
                    <span>2 Baths</span>
                  </div>
                  <div className="property__detail">
                    <Image src={Car} alt="Parking" />
                    <span className="property__line"></span>
                    <span>1 Parking</span>
                  </div>
                  <div className="property__detail">
                    <Image src={Ruler} alt="sqft" />
                    <span className="property__line"></span>
                    <span>120sqft</span>
                  </div>
                </div>
                <button className="button button--dark">For Sale</button>
              </div>
            </div>
            <div className="propertyWrapper">
              <div className="richtext">
                <h2 className="heading-secondary">About the property</h2>
                <p className="description">
                  Laminate flooring is a more affordable option in place of
                  hardwood flooring that can cost almost ten times the cost of
                  laminate flooring. Laminate flooring is light, durable and can
                  be made to resemble.
                  <br />
                  <br />
                  Appropriately empower dynamic leadership skills after business
                  portals. Globally my cardinate interactive supply chains with
                  distinctive quality vectors global sources services. Uniquely
                  matrix economically sound value through cooperative
                  technology. Competently parallel task fully researched data
                  and enterprise process improvements.
                </p>
                <ul>
                  <li>
                    Dynamically target high-payoff intellectual capital for
                    customized
                  </li>
                  <li>Interactively procrastinate high-payoff content</li>
                  <li>
                    Credibly reinter mediate backend ideas for cross-platform
                    models
                  </li>
                </ul>
                <p className="description">
                  Uniquely matrix economically sound value through cooperative
                  technology. Competently parallel task fully researched data
                  and enterprise process improvements. Collaboratively expedite
                  quality manufactured products via client-focused results
                  quickly communicate enabled technology and turnkey leadership
                  skills. Uniquely enable accurate supply chains rather than
                  friction technology.
                </p>
                <blockquote>
                  “Democracy must be built through open societies that share
                  information. When there is information, there is
                  enlightenment. When there is no sharing of power, no rule of
                  law, no accountability, there is abuse, corruption and
                  indignation.”
                </blockquote>
                <h3 className="heading-tertiary">
                  Make real time a build services
                </h3>
                <p className="description">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
                <ol>
                  <li>
                    It brings the right people together with all the right
                    information and tools to get work done
                  </li>
                  <li>
                    We provide operational efficiency, data security, and
                    flexible scale
                  </li>
                  <li>
                    Your best work, together in one package that works
                    seamlessly from your computer
                  </li>
                  <li>
                    Delivers the tools you need to save time Improve field
                    performance always
                  </li>
                </ol>
                <p className="description">
                  It is a long established fact that a reader will be distracted
                  by the readable content page when looking at its layout. The
                  point of using Lorem Ipsum is that it more-or-less normal
                  distribution of letters, as felt opposed to using 'Content
                  here making it look like readable.
                </p>
              </div>
              <div className="propertyDetails__sidebar">
                <div className="propertyDetails__aboutAgent">
                  <h3 className="heading-tertiary">About Agent</h3>
                  <p className="description">
                    A perfect property finder and seller with great knowledge in
                    the real estate field. Talented in searching for a property
                    with in the customer's needed areas.
                  </p>
                  <div className="propertyDetails__user">
                    <img
                      src="https://assets.website-files.com/63525de8322ba72165834b06/635a49cbe6c49fdf23af959d_agent-image-4-p-500.jpg"
                      alt=""
                    />
                    <div className="propertyDetails__name">
                      <a href="/" className="heading-tertiary">
                        Rosalina William
                      </a>
                      <span className="description">Land Seller</span>
                    </div>
                  </div>
                  <div className="propertyDetails__contact">
                    <div className="propertyDetails__contactItem">
                      <img
                        src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/635a5f5172a1558005e18c30_agent-mail-icon.svg"
                        alt=""
                      />
                      <p className="description">anne-hathaway@mail.com</p>
                    </div>
                    <div className="propertyDetails__contactItem">
                      <img
                        src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/635a5febb5560973af5a733b_agent-call-icon.svg"
                        alt=""
                      />
                      <p className="description">+ 157 - 510 - 1720</p>
                    </div>
                  </div>
                </div>
                <div className="propertyDetails__form">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="number" placeholder="Phone" />
                  <input type="text" placeholder="Message" />
                  <button className="button button--dark">Submit</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Gallery />

        <Property>
          <Title
            count="01"
            subTitle="Properties"
            title="Properties for sale in your favorite area"
            className="property__text u-text-center"
          />
        </Property>
        <Footer />
      </>
    </>
  );
};

export default PropertyDetailPage;
