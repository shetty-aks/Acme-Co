import * as React from 'react';
import styled from "styled-components";

type CTABannerProps = {
    title: string;
    textColor: string;
    children: React.ReactNode;
    order?: number;
};

const CTAWrapper = styled.div<CTABannerProps>`
  padding: 40px 60px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2, p {
    color: ${(props) => props.textColor};
  }

  h2 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 1.19;
    margin-bottom: 2.25rem;

  }

  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 2.25rem;
  }

  @media screen and (max-width: 940px) {
    padding: 20px 40px;
    align-items: center;
    width: 100vw;
    order: ${(props) => props.order};

    p, h2 {
      margin-bottom: 1.25rem;
    }

  }

  @media screen and (max-width: 450px) {
    p {
      font-size: 1rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

const CTABanner = (props: CTABannerProps) => {
    return (
        <CTAWrapper order={props.order} textColor={props.textColor}>
            <div>
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </CTAWrapper>

    );
};

export default CTABanner;