import React from "react";
import styled from "styled-components";
import UIButton from "../button/UIButton";

type CTABannerProps = {
  title: string;
  textColor: string;
  buttonTitle: string;
  buttonTextColor: string;
  children: ReactNode;
};

const CTAWrapper = styled.div<CTABannerProps>`
  padding: 40px;
  flex: 2;
  h2, p {
    color: ${(props)=> props.textColor};
  }
`;

const CTABanner = ({
  title,
  textColor,
  buttonTitle,
  buttonTextColor,
  children
}: {
  CTABannerProps;
}) => {
  return (
    <CTAWrapper textColor={textColor}>
      <h2>{title}</h2>
      {children}
      <UIButton
        text = {buttonTitle}
        backgroundColor = "white"
        height = "48px"
        width = "248px"
        color = {buttonTextColor}
      />
    </CTAWrapper>

  );
};

export default CTABanner;