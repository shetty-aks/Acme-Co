import React from "react";
import styled from "styled-components";
import SectionWrapper from "../layout/SectionWrapper";
import CTABanner from "../cta/CTABanner";
import Editor from "../editor/Editor";

const ImageWrapper = styled.div`
  flex: 3;
  padding: 40px;
`;

const ExploreSDK = () => {
    return (
        <SectionWrapper>
            <CTABanner
                title="Ready to Build?"
                buttonTitle="Expore the SDK"
                textColor="#787D84"
                buttonTextColor="#787D84"
            >
                <p>
                    Download our Developer SDK and begin creating experiencs of your own.
                </p>
                <p>
                    Our platforms supports Development in JAVA, Go, Javascript, and
                    Python.
                </p>
            </CTABanner>
            <ImageWrapper>
                <Editor/>
            </ImageWrapper>
        </SectionWrapper>
    );
};

export default ExploreSDK;
