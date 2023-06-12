import React from "react";

const Title = ({ className, count, title, subTitle }) => {
  return (
    <div className={`${className === undefined ? "" : className}`}>
      <h4 className="heading-quaternary u-text-uppercase">
        <span className="heading-count">{count}</span> {subTitle}
      </h4>
      <h2 className="heading-secondary">{title}</h2>
    </div>
  );
};

export default Title;
