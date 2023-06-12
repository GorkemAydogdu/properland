import React from "react";

import List from "./headerList";

const HeaderNavbar = () => {
  return (
    <nav className="header__navbar header__navbar--disable u-d-flex-a-center">
      <List />
      <a href="/" className="button button--dark">
        Contact
      </a>
    </nav>
  );
};

export default HeaderNavbar;
