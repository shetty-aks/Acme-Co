import React, { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

type BasicLayoutProps = {
  children: ReactNode;
  color: string;
};

export const GlobalStyle = createGlobalStyle<BasicLayoutProps>`
  * {
    box-sizing: border-box;
    padding: 0;
    font-family: 'Lato', sans-serif;
    color: #787D84;
    margin: 0;
  }
`;

const BasicLayout = ({ children }: { BasicLayoutProps }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
