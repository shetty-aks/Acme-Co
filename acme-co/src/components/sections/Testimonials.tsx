import React from "react";
import styled from "styled-components";
import SectionWrapper from "../layout/SectionWrapper";
import CTABanner from "../cta/CTABanner";
import Image from "next/image";

//temp padding to keep image to the bottom of the section
const Main = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Semicolon = styled.span`
  font-size: 200px;
`;

const Text = styled.span`

`;

const Testimonials = () => {
  return (
    <SectionWrapper>
    <Main>
      <Semicolon>"</Semicolon>
      <Text>
        <p>Pop-up banjo lumbersexual gentrify vinyl tofu. Taiyaki adaptogen organic drinking vinegar hella. Four dollar toast salvia cold-pressed, tilde fixie vape copper mug umami disrupt glossier iceland man bun pour-over pabst. Vaporware banjo crucifix, kombucha shaman schlitz tousled microdosing vinyl put a bird on it lomo vegan pinterest.</p>
        <p>- Jane Doe</p>
        <Image
        src="/assets/person-1.png"
        alt="person1"
        width={40}
        height={40}
        />
        <Image
        src="/assets/person-2.png"
        alt="person2"
        width={40}
        height={40}
        />
        <Image
        src="/assets/person-3.png"
        alt="person3"
        width={40}
        height={40}
        />
      </Text>
      <Semicolon>"</Semicolon>
    </Main>
    </SectionWrapper>
  );
};

export default Testimonials;