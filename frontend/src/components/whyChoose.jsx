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
          <h3 className="heading-tertiary u-text-uppercase">
            <span className="heading-count">03</span> Why Choose
          </h3>
          <h2 className="heading-secondary">
            Why Choose Our Properties Of Real Estate Industries
          </h2>
        </div>
        <div className="whyChoose__content">
          <div className="whyChoose__item whyChoose__item--friendly">
            <div className="whyChoose__item--image">
              <Image src={BudgetFriendly} alt="" />
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
          <div className="whyChoose__item whyChoose__item--insurance">
            <div className="whyChoose__item--image">
              <Image src={Insurance} alt="" />
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
          <div className="whyChoose__item whyChoose__item--trusted">
            <div className="whyChoose__item--image">
              <Image src={Trusted} alt="" />
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
          <div className="whyChoose__item whyChoose__item--location">
            <div className="whyChoose__item--image">
              <Image src={Location} alt="" />
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
          <div className="whyChoose__item whyChoose__item--commission">
            <div className="whyChoose__item--image">
              <Image src={Commission} alt="" />
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
      </Container>
    </section>
  );
};

export default WhyChoose;
