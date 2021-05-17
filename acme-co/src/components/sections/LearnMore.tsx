import React from "react";
import styled from "styled-components";
import SectionWrapper from "../layout/SectionWrapper";
import CTABanner from "../cta/CTABanner";
import Image from "next/image";

//temp padding to keep image to the bottom of the section
const ImageWrapper = styled.div`
  flex: 3;
`;



const LearnMore = () => {
  return (
    <SectionWrapper>
      <ImageWrapper>
        <Image
          src="/assets/iphone-in-hand.png"
          alt="Iphone in hand"
          width={570}
          height={440}
        />
      </ImageWrapper>
      <CTABanner title="To Infinity & Beyond!" buttonTitle ="Learn More" textColor="#787D84" buttonTextColor="#787D84">
        <p>Watch all your favorite movies anytime you want! Our premium plans has over 10,000 movies and shows to choose from.</p>
      </CTABanner>
    </SectionWrapper>
  );
};

export default LearnMore;