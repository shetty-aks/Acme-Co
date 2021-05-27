import * as React from 'react';
import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/router";
import UIButton from "../button/UIButton";
import Image from "next/image";

const NavWrapper = styled.nav`
  height: 80px;
  width: 100vw;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 820px) {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
  }
`;

const NavUl = styled.ul`
  position: relative;

  li {
    display: inline-block;
    margin: 20px;
    position: relative;
  }

  a {
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    color: #96b1c0;
    height: 100%;
  }

  a:hover {
    color: #6d7278;
  }

  .active {
    color: #6d7278;
  }

  button:hover {
    background-color: #F7F8F8;
  }

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const Logo = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
`;

const HorizontalLine = styled.hr`
  position: absolute;
  top: 80px;
  width: 16.5%;
  height: 4px;
  background-color: #32c5ff;
  border: none;
`;

const HamburgerButton = styled.button`
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 820px) {
    display: block;
  }
`;

const MenuWrapper = styled.ul`
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  z-index: 1;
  top: 80px;
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
  }

  a {
    text-decoration: none;
    padding-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #96b1c0;
  }

  li {
    padding: 2rem;
  }

  a:hover {
    color: #6d7278;
  }

  .active {
    border-bottom: 4px solid #32c5ff;
    color: #6d7278;
  }
`;

type PopupProps = {
    display: string;
};

export const Popup = styled.div<PopupProps>`
  display: ${(props) => props.display};
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 10px;
  height: 232px;
  left: -40px;
  width: 432px;
  position: absolute;
  top: 62px;

  .popupSection {
    height: 50%;
    display: flex;
  }

  .popupDivider {
    height: 1px;
    background-color: #E6E6E6;
    border: none;
  }

  .popupImage {
    width: 30%;
    padding: 10px;
    text-align: center;
  }

  .popupText {
    padding: 20px;
  }

  p {
    font-size: 0.6875rem;
  }

  h2 {
    font-size: 0.875rem;
    color: #7A44FF;
  }

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

type ArrowUpProps = {
    display: string;
};

const ArrowUp = styled.div<ArrowUpProps>`
  display: ${(props) => props.display};
  position: absolute;
  top: 52px;
  width: 0;
  left: 30px;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #FFFFFF;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const Navbar = () => {
    const router = useRouter();
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const [displayPopup, setDisplayPopup] = React.useState("none");

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const renderNavLinks = () => {
        return (
            <>
                <li>
                    <Link href="/">
                        <a className={router.pathname == "/" ? "active" : ""}>OVERVIEW</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a onMouseOver={() => {
                            setDisplayPopup("block")
                        }} onMouseOut={() => {
                            setDisplayPopup("none")
                        }}>PRODUCTS</a>
                    </Link>
                    <ArrowUp display={displayPopup}/>
                    <Popup display={displayPopup}>
                        <div className="popupSection">
                            <span className="popupImage">
                                <Image
                                    src="/assets/product-1.png"
                                    alt="Product1"
                                    width={38}
                                    height={80}
                                />
                            </span>
                            <span className="popupText">
                                <h2>INFINXITY X</h2>
                                <p>
                                Beard tumblr williamsburg forage shabby chic tote bag,
                                chicharrones stumptown godard mustache hella street art.
                                </p>
                            </span>
                        </div>
                        <hr className="popupDivider"></hr>
                        <div className="popupSection">
                                <span className="popupImage">
                                    <Image
                                        src="/assets/product-2.png"
                                        alt="Product1"
                                        width={170}
                                        height={190}
                                    />
                                </span>
                            <span className="popupText">
                                    <h2>SAPPHIRE 65</h2>
                                    <p>
                                    Beard tumblr williamsburg forage shabby chic tote bag,
                                    chicharrones stumptown godard mustache hella street art.
                                    </p>
                                </span>
                        </div>
                    </Popup>
                </li>
                <li>
                    <Link href="/">
                        <a>SERVICES</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>SUPPORT</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>COMPANY</a>
                    </Link>
                </li>
                <li>
                    <UIButton
                        text="login"
                        backgroundColor="white"
                        color="#32C5FF"
                        border="2px solid #32C5FF"
                        height="48px"
                        width="104px"
                    ></UIButton>
                </li>
            </>
        );
    };

    return (
        <>
            <NavWrapper>
                <Logo>ACME CO.</Logo>
                <NavUl>
                    {renderNavLinks()}
                    <HorizontalLine/>
                </NavUl>
                <HamburgerButton onClick={() => toggleMenu()}>
                    <Image
                        src="/assets/hamburger-icon.png"
                        alt="Hamburger Icon"
                        width={32}
                        height={28}
                    />
                </HamburgerButton>
                {menuIsOpen ? <MenuWrapper>{renderNavLinks()}</MenuWrapper> : ""}
            </NavWrapper>
        </>
    );
};

export default Navbar;
