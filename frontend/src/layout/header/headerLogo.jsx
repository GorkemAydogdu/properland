import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
const HeaderLogo = () => {
  useEffect(() => {
    document.querySelector(".header__logo img").removeAttribute("width");
    document.querySelector(".header__logo img").removeAttribute("height");
  }, []);

  const menuButtonRef = useRef();

  const clickButtonHandler = () => {
    menuButtonRef.current.classList.toggle("header__menu--active");
    const navbar = document.querySelector(".header__navbar");
    navbar.classList.toggle("header__navbar--disable");
  };
  return (
    <div className="header__wrap u-d-flex-a-center u-j-space-between">
      <a href="/" className="header__logo">
        <Image src={Logo} alt="Logo" />
      </a>
      <div
        ref={menuButtonRef}
        onClick={clickButtonHandler}
        className="header__menu"
      >
        <span></span>
      </div>
    </div>
  );
};

export default HeaderLogo;
