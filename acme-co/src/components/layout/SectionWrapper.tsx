import * as React from 'react';
import styled from "styled-components";

type SectionWrapperProps = {
    background: string;
    height: string;
    heightMobile?: string;
    children: React.ReactNode;
};
//botton is just to show the sections till actual styling is added later
const StyledWrapper = styled.section<SectionWrapperProps>`
  height: ${(props) => props.height};
  width: 100vw;
  background: ${(props) => props.background};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 940px) {
    flex-direction: column;
    height: ${(props) => props.heightMobile};
  }
`;

const SectionWrapper = (props: SectionWrapperProps) => {
    return (
        <StyledWrapper
            background={props.background}
            height={props.height}
            heightMobile={props.heightMobile}
        >
            {props.children}
        </StyledWrapper>
    );
};

export default SectionWrapper;