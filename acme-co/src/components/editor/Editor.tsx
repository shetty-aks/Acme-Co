import React, { useEffect } from "react";
import styled from "styled-components";
import UIButton from "../button/UIButton.tsx";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const EditorWrapper = styled.div``;

const TabContainer = styled.div``;

const Editor = () => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <EditorWrapper>
      <TabContainer>
        <UIButton
          text="Javascript"
          backgroundColor="white"
          height="48px"
          width="max-content"
          padding="0 20px"
        ></UIButton>
        <UIButton
          text="GO"
          backgroundColor="white"
          height="48px"
          width="max-content"
          padding="0 20px"
        ></UIButton>
        <UIButton
          text="Java"
          backgroundColor="white"
          height="48px"
          width="max-content"
          padding="0 20px"
        ></UIButton>
        <UIButton
          text="Python"
          backgroundColor="white"
          height="48px"
          width="1max-content"
          padding="0 20px"
        ></UIButton>
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
