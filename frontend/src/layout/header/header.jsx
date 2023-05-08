import React from "react";
import HeaderLogo from "./headerLogo";
import HeaderNavbar from "./headerNavbar";
const Header = () => {
  return (
    //navbar dışında herhangi bir yere tıklandığına menü kapanacak.
    // tıklanan event'in parentElementi header__navbar classı içermiyorsa kapanacak
    <header className="header u-d-flex-a-center">
      <HeaderLogo />
      <HeaderNavbar />
    </header>
  );
};

export default Header;
