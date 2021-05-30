import * as React from 'react';
import {createGlobalStyle} from "styled-components";

type BasicLayoutProps = {
    children: React.ReactNode;
};

const GlobalStyle = createGlobalStyle<BasicLayoutProps>`
  * {
    box-sizing: border-box;
    padding: 0;
    font-family: 'Lato', sans-serif;
    color: #787D84;
    margin: 0;
  }

  html {
    font-size: 100%;
  }
`;

const BasicLayout: React.FunctionComponent<BasicLayoutProps> = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            {children}
        </>
    );
};

export default BasicLayout;
