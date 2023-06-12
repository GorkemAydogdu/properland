import React from "react";

import Link from "next/link";

const NeighborhoodsCard = () => {
  return (
    <>
      <Link href="/properties" className="neighborhoods__card">
        <div className="neighborhoods__image--wrap">
          <img
            src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="New York"
          />
        </div>
        <div className="neighborhoods__details">
          <span className="neighborhoods__name heading-tertiary">New York</span>
          <span className="neighborhoods__property">250 Property</span>
        </div>
      </Link>
      <Link href="/properties" className="neighborhoods__card">
        <div className="neighborhoods__image--wrap">
          <img
            src="https://images.unsplash.com/photo-1541880846903-67b7b971a0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            alt="Atlanta"
          />
        </div>
        <div className="neighborhoods__details">
          <span className="neighborhoods__name heading-tertiary">Atlanta</span>
          <span className="neighborhoods__property">250 Property</span>
        </div>
      </Link>
      <Link href="/properties" className="neighborhoods__card">
        <div className="neighborhoods__image--wrap">
          <img
            src="https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            alt="Singapore"
          />
        </div>
        <div className="neighborhoods__details">
          <span className="neighborhoods__name heading-tertiary">
            Singapore
          </span>
          <span className="neighborhoods__property">53 Property</span>
        </div>
      </Link>
      <Link href="/properties" className="neighborhoods__card">
        <div className="neighborhoods__image--wrap">
          <img
            src="https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Paris"
          />
        </div>
        <div className="neighborhoods__details">
          <span className="neighborhoods__name heading-tertiary">Paris</span>
          <span className="neighborhoods__property">99 Property</span>
        </div>
      </Link>
    </>
  );
};

export default NeighborhoodsCard;
