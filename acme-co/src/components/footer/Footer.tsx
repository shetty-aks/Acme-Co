import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const NavWrapper = styled.nav`
  height: 80px;
  width: 100vw;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
`;

//temp background-color, so that the image is visible
const FooterWrapper = styled.footer`
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #B0D0E0;
`;

const FooterMain = styled.div`
  flex: 4;
  display: flex;
`;

const FooterCopyright = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const LogoImage = styled.div`
  flex: 1;
`;

const LinksWrapper = styled.div`
  flex: 1;

  a {
    display: block;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMain>
        <LogoImage>
          <Image
            src="/assets/acme-logo.png"
            alt="Acme logo"
            width={205}
            height={269}
          />
        </LogoImage>
        <LinksWrapper>
          <h2>Products</h2>
          <Link href="/">
            <a>Acme Phone +</a>
          </Link>
          <Link href="/">
            <a>Acme Phone Duo</a>
          </Link>
          <Link href="/">
            <a>Acme Tablet</a>
          </Link>
          <Link href="/">
            <a>Acme Computer</a>
          </Link>
          <Link href="/">
            <a>Acme Smart Desk</a>
          </Link>
        </LinksWrapper>
        <LinksWrapper>
          <h2>Support</h2>
          <Link href="/">
            <a>Help Desk</a>
          </Link>
          <Link href="/">
            <a>Talk to a Specialist</a>
          </Link>
          <Link href="/">
            <a>Email Support</a>
          </Link>
          <Link href="/">
            <a>FAQ</a>
          </Link>
        </LinksWrapper>
        <LinksWrapper>
          <h2>Company</h2>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Careers</a>
          </Link>
          <Link href="/">
            <a>Support</a>
          </Link>
          <Link href="/">
            <a>Media kit</a>
          </Link>
          <Link href="/">
            <a>Terms of service</a>
          </Link>
          <Link href="/">
            <a>Privacy policy</a>
          </Link>
        </LinksWrapper>
      </FooterMain>
      <FooterCopyright>
        <span>© 2020 ACME Co. All rights reserved.</span>
        <span>Hand Made by AKSHITHA</span>
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;