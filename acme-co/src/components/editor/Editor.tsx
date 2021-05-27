import * as React from 'react';
import styled from "styled-components";
import UIButton from "../button/UIButton";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const EditorWrapper = styled.div`
  width: 512px;
  height: 360px;
  margin-left: auto;
  @media screen and (max-width: 900px) {
    width: 420px;
  }

  @media screen and (max-width: 650px) {
    width: 85vw;
  }
`;

const TabContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(109, 114, 120, 0.24) -88.96%, #000000 100%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0px 1px 0px 1px rgba(255, 255, 255, 0.12);
  position: relative;

  @media screen and (max-width: 650px) {
    button {
      padding: 0 10px;
    }
  }
`;

const HorizontalLine = styled.hr`
  position: absolute;
  top: 52px;
  left: 8px;
  width: 90px;
  height: 4px;
  background-color: #0091FF;
  border: none;
`;

const Editor = () => {
    React.useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
        <EditorWrapper>
            <TabContainer>
                <UIButton
                    text="Javascript"
                    backgroundColor="transparent"
                    height="56px"
                    width="max-content"
                    padding="0 20px"
                    color="#FFFFFF"
                    border="none"
                ></UIButton>
                <UIButton
                    text="GO"
                    backgroundColor="transparent"
                    height="56px"
                    width="max-content"
                    padding="0 20px"
                    color="#FFFFFF"
                    border="none"
                ></UIButton>
                <UIButton
                    text="Java"
                    backgroundColor="transparent"
                    height="56px"
                    width="max-content"
                    padding="0 20px"
                    color="#FFFFFF"
                    border="none"
                ></UIButton>
                <UIButton
                    text="Python"
                    backgroundColor="transparent"
                    height="56px"
                    width="max-content"
                    padding="0 20px"
                    color="#FFFFFF"
                    border="none"
                ></UIButton>
                <HorizontalLine/>
            </TabContainer>
            <pre>
        <code className="js">
          {`class NewGame {
            constructor(settings = {id: '', pinned: false}) {
            const {id} = settings;
            const elementId = id || ‘#game’;
            const hasSeenMessage = Cookies.get('ga');

            // CHECK IF USER HAS SEEN MESSAGE
            if(!hasSeenMessage) {
            this.$GDPR = $(elementId);
            this.$close = this.$GDPR.find('#close-gdpr');

            // activate
            this.activate();
            }
          }`}
        </code>
      </pre>
        </EditorWrapper>
    );
};

export default Editor;
