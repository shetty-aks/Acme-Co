import * as React from 'react';
import styled from "styled-components";
import SectionWrapper from "../layout/SectionWrapper";
import CTABanner from "../cta/CTABanner";
import Editor from "../editor/Editor";
import UIButton from "../button/UIButton";

const ImageWrapper = styled.div`
  flex: 3;
  padding: 40px 60px;
  @media screen and (max-width: 650px) {
    padding: 20px 15px;
  }
`;

const ExploreSDK = () => {
    return (
        <SectionWrapper background="rgba(0, 0, 0, 0.85)" height="520px" heightMobile="max-content">
            <CTABanner
                title="Ready to Build?"
                textColor="#FFFFFF"
            >
                <p>
                    Download our Developer SDK and begin creating experiencs of your own.
                </p>
                <p>
                    Our platforms supports Development in JAVA, Go, Javascript, and
                    Python.
                </p>
            </CTABanner>
            <UIButton
                text="Expore the SDK"
                backgroundColor="linear-gradient(180deg, #313539 0%, #000000 100%)"
                height="48px"
                width="248px"
                color="#FFFFFF"
                border="1px solid #000000"
                boxShadow="0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24), inset 0px 2px 0px rgba(255, 255, 255, 0.12)"
            />
            <ImageWrapper>
                <Editor/>
            </ImageWrapper>
        </SectionWrapper>
    );
};

export default ExploreSDK;
