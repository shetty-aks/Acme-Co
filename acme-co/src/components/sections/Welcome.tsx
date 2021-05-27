import * as React from 'react';
import styled from "styled-components";
import SectionWrapper from "../layout/SectionWrapper";
import CTABanner from "../cta/CTABanner";
import UIButton from "../button/UIButton";

//temp padding to keep image to the bottom of the section
const ImageWrapper = styled.div`
  flex: 3;
  gap: 15px;
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;
  padding-right: 55px;
  align-items: flex-end;
  @media screen and (max-width: 1124px) {
    padding-right: 15px;
    gap: 6px;
  }
  @media screen and (max-width: 940px) {
    flex: 1;
    padding: 0 40px 0 40px;
    justify-content: center;
    overflow: hidden;
  }
`;

type PhonePlaceholderProps = {
    background: string;
};

const PhonePlaceholder = styled.div<PhonePlaceholderProps>`
  width: 27vw;
  height: 350px;
  background-position: center;
  background: ${(props) => props.background};
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1124px) {
    width: 270px;
    height: 320px;
  }

  @media screen and (max-width: 940px) {
    height: 150px;
    width: 30vw;
  }

  @media screen and (max-width: 400px) {
    height: 113px;
  }
`;

const Container = styled.div`


`;

const Welcome = () => {
    return (
        <SectionWrapper background="linear-gradient(225deg,#32A8FF, #B620E0, #F7B500)" height="440px">
            <CTABanner
                title="SPRING IS HERE"
                textColor="#FFFFFF"
            >
                <p>
                    We’ve updated out lineup of products for spring. Checkout the lastest
                    discounts and specials available until 4/20/20.{" "}
                </p>
            </CTABanner>
            <UIButton
                text="Explore Products"
                backgroundColor="linear-gradient(177.31deg, #32C5FF -71.22%, #7275F0 81.97%, #B620E0 246.67%)"
                height="48px"
                width="248px"
                color="#FFFFFF"
                border="1px solid #6236FF"
                boxShadow="0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24), inset 0px 2px 0px rgba(255, 255, 255, 0.24)"
            />
            <ImageWrapper>
                <PhonePlaceholder background="url('/assets/iphone-front.png')"></PhonePlaceholder>
                <PhonePlaceholder background="url('/assets/iphone-back.png')"></PhonePlaceholder>
            </ImageWrapper>
        </SectionWrapper>
    );
};

export default Welcome;
