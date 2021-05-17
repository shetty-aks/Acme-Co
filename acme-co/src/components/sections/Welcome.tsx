import React from "react";
import styled from "styled-components";
import SectionWrapper from "../layout/SectionWrapper";
import CTABanner from "../cta/CTABanner";
import Image from "next/image";

//temp padding to keep image to the bottom of the section
const ImageWrapper = styled.div`
  flex: 3;
  padding-top: 40px;
`;

const Welcome = () => {
  return (
    <SectionWrapper>
      <CTABanner title="SPRING IS HERE" buttonTitle ="Explore Products" textColor="#787D84" buttonTextColor="#787D84">
        <p>We’ve updated out lineup of products for spring. Checkout the lastest discounts and specials available until 4/20/20. </p>
      </CTABanner>
      <ImageWrapper>
        <Image
          src="/assets/iphone-front.png"
          alt="iphone front"
          width={250}
          height={400}
        />
        <Image
          src="/assets/iphone-back.png"
          alt="iphone back"
          width={250}
          height={400}
        />
      </ImageWrapper>
    </SectionWrapper>
  );
};

export default Welcome;