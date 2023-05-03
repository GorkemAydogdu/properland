import React from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
const HeaderLogo = () => {
  return (
    <a href="/" className="header__logo">
      <Image src={Logo} alt="Logo" />
      <span>ProperLand</span>
    </a>
  );
};

export default HeaderLogo;
