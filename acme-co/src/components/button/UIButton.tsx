import React from "react";
import styled from "styled-components";

type ButtonProps = {
  height: string;
  width: string;
  color?: string;
  padding?: string;
  backgroundColor: string;
  text: string;
};

const Button = styled.button<ButtonProps>`
  background: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border-radius: 8px;
`;

const UIButton = ({
  height,
  width,
  color,
  padding,
  backgroundColor,
  text,
}: {
  ButtonProps;
}) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      color={color}
      padding={padding}
    >
      {text.toUpperCase()}
    </Button>
  );
};

export default UIButton;
