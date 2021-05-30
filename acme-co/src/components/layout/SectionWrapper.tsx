import React from "react";
import styled from "styled-components";

type SectionWrapperProps = {
    background: string;
    children: ReactNode;
};
//botton is just to show the sections till actual styling is added later
const StyledWrapper = styled.section<SectionWrapperProps>`
  height: 440px;
  width: 100vw;
  background: ${(props) => props.background};
  border-bottom: 1px solid #eaeaea;
  display: flex;
`;

const SectionWrapper = ({
                            background,
                            children
                        }: {
    SectionProps;
}) => {
    return (
        <StyledWrapper
            background={background}
        >
            {children}
        </StyledWrapper>
    );
};

export default SectionWrapper;