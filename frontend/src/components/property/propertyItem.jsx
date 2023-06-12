import React from "react";

import Appartment from "@/assets/Appartment.png";
import Location from "@/assets/Location.svg";
import Bath from "@/assets/Bath.svg";
import Bed from "@/assets/Bed.svg";
import Car from "@/assets/Car.svg";
import Ruler from "@/assets/Ruler.svg";

const PropertyItem = () => {
  return (
    <>
      <div className="property__item">
        <a href="/propertyDetail" className="property__image">
          <Image src={Appartment} alt="Appartment" />
        </a>
        <div className="property__price-wrap">
          <span className="property__price">$3500/Mo</span>
          <button className="button button--sale">For Sale</button>
        </div>
        <div className="property__name-wrap">
          <a href="/propertyDetail" className="property__name">
            Modern Loft in Land River
          </a>
          <div className="property__location">
            <Image src={Location} alt="Location" />
            <span>709 West Drive Chicago,IL 60606</span>
          </div>
        </div>
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
      </div>
      <div className="property__item">
        <a href="/" className="property__image">
          <Image src={Appartment} alt="Appartment" />
        </a>
        <div className="property__price-wrap">
          <span className="property__price">$3500/Mo</span>
          <button className="button button--sale">For Sale</button>
        </div>
        <div className="property__name-wrap">
          <a href="/" className="property__name">
            Comefortable Appartment
          </a>
          <div className="property__location">
            <Image src={Location} alt="Location" />
            <span>709 West Drive Chicago,IL 60606</span>
          </div>
        </div>
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
      </div>
      <div className="property__item">
        <a href="/" className="property__image">
          <Image src={Appartment} alt="Appartment" />
        </a>
        <div className="property__price-wrap">
          <span className="property__price">$3500/Mo</span>
          <button className="button button--sale">For Sale</button>
        </div>
        <div className="property__name-wrap">
          <a href="/" className="property__name">
            Comefortable Appartment
          </a>
          <div className="property__location">
            <Image src={Location} alt="Location" />
            <span>709 West Drive Chicago,IL 60606</span>
          </div>
        </div>
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
      </div>
      <div className="property__item">
        <a href="/" className="property__image">
          <Image src={Appartment} alt="Appartment" />
        </a>
        <div className="property__price-wrap">
          <span className="property__price">$3500/Mo</span>
          <button className="button button--sale">For Sale</button>
        </div>
        <div className="property__name-wrap">
          <a href="/" className="property__name">
            Comefortable Appartment
          </a>
          <div className="property__location">
            <Image src={Location} alt="Location" />
            <span>709 West Drive Chicago,IL 60606</span>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default PropertyItem;
