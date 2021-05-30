import * as React from 'react';
import styled from "styled-components";
import SectionWrapper from "../layout/SectionWrapper";
import CTABanner from "../cta/CTABanner";
import StyledButton from "../button/StyledButton";

//temp padding to keep image to the bottom of the section
const ImageWrapper = styled.div`
  flex: 3;
  align-self: flex-start;
  padding-top: 90px;
  @media screen and (max-width: 940px) {
    order: 2;
    flex: 0.5;
    padding-top: 0;
  }

  @media screen and (max-width: 450px) {
    flex: 0.6;
  }
`;

const PhoneInHand = styled.div`
  width: 60vw;
  height: 350px;
  margin-left: -20px;
  background-position: center;
  background: url('/assets/iphone-in-hand.png');
  background-repeat: no-repeat;
  background-size: cover;


  @media screen and (max-width: 940px) {
    width: 500px;
    height: 240px;
    margin-top: -40px;
    margin-left: -80px;
  }

  @media screen and (max-width: 450px) {
    width: 100vw;
    height: 180px;
  }
`;

const LearnMore = () => {
    return (
        <SectionWrapper background="url('/assets/triangle-background.png')" height="440px" heightMobile="480px">
            <ImageWrapper>
                <PhoneInHand background="url('/assets/iphone-front.png')"></PhoneInHand>
            </ImageWrapper>
            <CTABanner
                order={1}
                title="To Infinity & Beyond!"
                textColor="#787D84"
            >
                <p>
                    Watch all your favorite movies anytime you want! Our premium plans has
                    over 10,000 movies and shows to choose from.
                </p>
            </CTABanner>
            <StyledButton
                order={3}
                text="Learn More"
                backgroundColor="linear-gradient(180deg, #FFFFFF 0%, #D8D8D8 113.83%)"
                height="48px"
                width="248px"
                color="#0091FF"
                border="1px solid #0091FF"
                boxShadow="0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24), inset 0px 2px 0px #FFFFFF"
            />
        </SectionWrapper>
    );
};

export default LearnMore;
