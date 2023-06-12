import React from "react";
import Image from "next/image";
import Home from "@/assets/Home.svg";

const Agency = ({ children }) => {
  return (
    <div className="agency u-text-uppercase">
      <Image src={Home} alt="Home" />
      <h3 className="agency__title">{children}</h3>
    </div>
  );
};

export default Agency;
