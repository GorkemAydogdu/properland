import React from "react";

import Image from "next/image";
import BudgetFriendly from "@/assets/budgetFriendly.png";
import Commission from "@/assets/commission.png";
import Insurance from "@/assets/insurance.png";
import Location from "@/assets/location.png";
import Trusted from "@/assets/trusted.png";
import Container from "./container";
const WhyChoose = () => {
  return (
    <section className="whyChoose">
      <Container>
        <div className="whyChoose__text u-text-center">
          <h3 className="heading-quaternary u-text-uppercase">
            <span className="heading-count">03</span> Why Choose
          </h3>
          <h2 className="heading-secondary">
            Why Choose Our Properties Of Real Estate Industries
          </h2>
        </div>
        <div className="whyChoose__content">
          <div className="whyChoose__row">
            <div className="whyChoose__item whyChoose__item--friendly u-d-flex-a-j-center">
              <div className="whyChoose__item--image">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634d2ec2dac1621991c1e43e_why-choose-image-1.png"
                  alt=""
                />
                {/* <Image src={BudgetFriendly} alt="" /> */}
              </div>
              <div className="whyChoose__item--text">
                <h3 className="heading-tertiary">Budget Friendly</h3>
                <p className="description">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
            <div className="whyChoose__item whyChoose__item--insurance u-d-flex-a-center">
              <div className="whyChoose__item--image">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634d3079feb1d6c7709cc4eb_why-choose-image-2-p-800.png"
                  alt=""
                />
                {/* <Image src={Insurance} alt="" /> */}
              </div>
              <div className="whyChoose__item--text">
                <h3 className="heading-tertiary">Property Insurance</h3>
                <p className="description">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
                <p className="description">
                  Distinctively re-engineer revolutionary meta-services and
                  premium.
                </p>
              </div>
            </div>
          </div>
          <div className="whyChoose__row">
            <div className="whyChoose__item whyChoose__item--trusted u-d-flex-a-j-center">
              <div className="whyChoose__item--image">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634d3096a626bc0da2b9dfb6_why-choose-image-3.png"
                  alt=""
                />
                {/* <Image src={Trusted} alt="" /> */}
              </div>
              <div className="whyChoose__item--text">
                <h3 className="heading-tertiary">Trusted By Thousands</h3>
                <p className="description">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
            <div className="whyChoose__item whyChoose__item--location u-d-flex-a-j-center">
              <div className="whyChoose__item--image">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/63c78b703e51d97bbb2d0799_map.png"
                  alt=""
                />
                {/* <Image src={Location} alt="" /> */}
              </div>
              <div className="whyChoose__item--text">
                <h3 className="heading-tertiary">Prime Location</h3>
                <p className="description">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
            <div className="whyChoose__item whyChoose__item--commission u-d-flex-a-j-center">
              <div className="whyChoose__item--image">
                <img
                  src="https://assets.website-files.com/6304f6a27b2b4e7a7062ee94/634d30b29eecdd306c10f03e_why-choose-image-5.png"
                  alt=""
                />
                {/* <Image src={Commission} alt="" /> */}
              </div>
              <div className="whyChoose__item--text">
                <h3 className="heading-tertiary">Lowest Commission</h3>
                <p className="description">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
