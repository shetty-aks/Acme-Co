import * as React from 'react';
import styled from "styled-components";
import SectionWrapper from "../layout/SectionWrapper";
import Image from "next/image";

//temp padding to keep image to the bottom of the section
const Main = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
  }
`;

const Semicolon = styled.span`
  font-size: 200px;
  @media screen and (max-width: 650px) {
    font-size: 140px;
    height: 80px;
    order: -1;
  }
`;

const Text = styled.span`
  font-size: 1.3125rem;
  font-weight: 400;
  line-height: 32px;
  text-align: center;

  .writerName {
    font-size: 0.875rem;
    font-weight: 700;
  }

  @media screen and (max-width: 650px) {
    font-size: 1rem;
  }
`;

const PersonImageWrapper = styled.div`
  display: inline;
  padding: 10px;

  img {
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }
`;

const Testimonials = () => {
    return (
        <SectionWrapper
            background="linear-gradient(180deg, rgba(50, 197, 255, 0.12) 0%, #FFFFFF 100%)"
            height="440px"
            heightMobile="max-content"
        >
            <Main>
                <Semicolon>“</Semicolon>
                <Text>
                    <p>
                        Pop-up banjo lumbersexual gentrify vinyl tofu. Taiyaki adaptogen
                        organic drinking vinegar hella. Four dollar toast salvia
                        cold-pressed, tilde fixie vape copper mug umami disrupt glossier
                        iceland man bun pour-over pabst. Vaporware banjo crucifix, kombucha
                        shaman schlitz tousled microdosing vinyl put a bird on it lomo vegan
                        pinterest.
                    </p>
                    <p className="writerName">- Jane Doe</p>
                    <PersonImageWrapper>
                        <Image
                            src="/assets/person-1.png"
                            alt="person1"
                            width={40}
                            height={40}
                            className="active"
                        />
                    </PersonImageWrapper>
                    <PersonImageWrapper>
                        <Image
                            src="/assets/person-2.png"
                            alt="person2"
                            className="personImage"
                            width={40}
                            height={40}
                        />
                    </PersonImageWrapper>
                    <PersonImageWrapper>
                        <Image
                            src="/assets/person-3.png"
                            alt="person3"
                            className="personImage"
                            width={40}
                            height={40}
                        />
                    </PersonImageWrapper>
                </Text>
                <Semicolon>”</Semicolon>
            </Main>
        </SectionWrapper>
    );
};

export default Testimonials;
