import * as React from 'react';
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
  background: linear-gradient(257.46deg, #32C5FF -7.2%, #B620E0 67.92%, #F7B500 139.34%);

  * {
    color: #FFFFFF;
  }

  @media screen and (max-width: 650px) {
    height: max-content;
  }
`;

const FooterMain = styled.div`
  flex: 4;
  display: flex;

  a {
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 2.28;
  }

  h4 {
    font-size: 0.875rem;
    line-height: 2.28;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column-reverse;
    .products {
      order: 5;
    }

    .support {
      order: 4;
    }

    .company {
      order: 2;
    }


  }
`;

const FooterCopyright = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const LogoImage = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (max-width: 650px) {
    align-self: center;
  }
`;

const LinksWrapper = styled.div`
  flex: 1;
  padding-top: 40px;

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
                <LinksWrapper className="products">
                    <h4>Products</h4>
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
                <LinksWrapper className="support">
                    <h4>Support</h4>
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
                <LinksWrapper className="company">
                    <h4>Company</h4>
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