import React from "react";
import Link from "next/link";

import List from "./headerList";

const HeaderNavbar = () => {
  return (
    <nav className="header__navbar header__navbar--disable u-d-flex-a-center">
      <List />
      <Link href="/contact-us" className="button button--dark">
        Contact
      </Link>
    </nav>
  );
};

export default HeaderNavbar;
