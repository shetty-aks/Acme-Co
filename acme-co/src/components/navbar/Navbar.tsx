import React from "react";
import styled from "styled-components";
import Link from "next/link";
import UIButton from "../button/UIButton.tsx";

const NavWrapper = styled.nav`
  height: 80px;
  width: 100vw;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
`;

const NavUl = styled.ul`
  li {
    display: inline-block;
    margin: 2px;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <h2>ACME CO.</h2>
      <NavUl>
        <li>
          <Link href="/">
            <a>OVERVIEW</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>PRODUCTS</a>
          </Link>
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
            height="48px"
            width="104px"
          ></UIButton>
        </li>
      </NavUl>
    </NavWrapper>
  );
};

export default Navbar;
