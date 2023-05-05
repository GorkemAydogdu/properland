import React from "react";
import HeaderLogo from "./headerLogo";
import HeaderNavbar from "./headerNavbar";
const Header = () => {
  return (
    <header className="header u-d-flex-a-center">
      <HeaderLogo />
      <HeaderNavbar />
      <div className="header__menu">
        <span></span>
      </div>
    </header>
  );
};

export default Header;
