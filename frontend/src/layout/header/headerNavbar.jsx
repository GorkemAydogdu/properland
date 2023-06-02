import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "@/assets/ArrowDown.svg";

const HeaderNavbar = () => {
  const dropDownList = useRef();

  const MouseEnterHandler = () => {
    if (window.innerWidth > 1024) {
      dropDownList.current.classList.add("header__dropdownList--active");
    }
  };

  const MouseLeaveHandler = () => {
    if (window.innerWidth > 1024) {
      dropDownList.current.classList.remove("header__dropdownList--active");
    }
  };

  return (
    <nav className="header__navbar header__navbar--disable u-d-flex-a-center">
      <ul className="header__list u-d-flex-a-center">
        <li className="header__item">
          <a href="/" className="header__link header__link--active">
            Home
          </a>
        </li>
        <li className="header__item">
          <Link href="/about-us" className="header__link">
            About
          </Link>
        </li>
        <li className="header__item">
          <a href="/" className="header__link">
            Properties
          </a>
        </li>
        <li
          onMouseEnter={MouseEnterHandler}
          onMouseLeave={MouseLeaveHandler}
          onClick={() => {
            if (window.innerWidth <= 1024) {
              dropDownList.current.classList.toggle(
                "header__dropdownList--active"
              );
            }
          }}
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
