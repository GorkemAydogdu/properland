import React from "react";
import Container from "@/layout/container";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import FooterLinks from "./footerLinks";
import FooterContact from "./footerContact";
import FooterSocial from "./footerSocial";
import FooterMailBox from "./footerMailBox";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__logo">
            <Image src={Logo} alt="Logo" />
            <FooterSocial />
          </div>
          <FooterMailBox />
        </div>
        <div className="footer__main">
          <FooterLinks />
          <FooterContact />
        </div>
        <p className="footer__copyright description u-text-center">
          Copyright © Properland | Designed by VictorFlow - Powered by Webflow.
        </p>
      </Container>
    </section>
  );
};

export default Footer;
