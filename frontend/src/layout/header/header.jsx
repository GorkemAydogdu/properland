import React from "react";
import HeaderLogo from "./headerLogo";
import HeaderNavbar from "./headerNavbar";
const Header = () => {
  return (
    <header className="header u-d-flex-a-center">
      <HeaderLogo />
      <HeaderNavbar />
    </header>
  );
};

export default Header;
