import React, { useRef } from "react";
import Image from "next/image";
import ArrowDown from "@/assets/Vector.svg";

const HeaderNavbar = () => {
  const dropDownList = useRef();

  const MouseEnterHandler = () => {
    dropDownList.current.classList.add("header__dropdownList--active");
  };

  const MouseLeaveHandler = () => {
    dropDownList.current.classList.remove("header__dropdownList--active");
  };

  return (
    <nav className="header__navbar u-d-flex-a-center">
      <ul className="header__list u-d-flex-a-center">
        <li className="header__item">
          <a href="/" className="header__link header__link--active">
            Home
          </a>
        </li>
        <li className="header__item">
          <a href="/" className="header__link">
            About
          </a>
        </li>
        <li className="header__item">
          <a href="/" className="header__link">
            Properties
          </a>
        </li>
        <li
          onMouseEnter={MouseEnterHandler}
          onMouseLeave={MouseLeaveHandler}
          className="header__item header__item--hover"
        >
          Pages <Image src={ArrowDown} alt="Arrow" />
          <ul ref={dropDownList} className="header__dropdownList">
            <li className="header__dropdownItem">
              <a href="/" className="header__link">
                Services
              </a>
            </li>
            <li className="header__dropdownItem">
              <a href="/" className="header__link">
                Agents
              </a>
            </li>
          </ul>
        </li>
        <li className="header__item">
          <a href="/" className="header__link">
            Blog
          </a>
        </li>
      </ul>
      <a href="/" className="button button--dark">
        Contact
      </a>
    </nav>
  );
};

export default HeaderNavbar;
