import * as React from 'react';
import styled from "styled-components";

type ButtonProps = {
    text: string;
    height: string;
    width: string;
    color?: string;
    padding?: string;
    backgroundColor: string;
    border: string;
    boxShadow?: string;
    order?: number;
};

const Button = styled.button<ButtonProps>`
  background: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  box-shadow: ${(props) => props.boxShadow};
  order: ${(props) => props.order};
  font-weight: bold;
  font-size: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
`;

const UIButton = (props: ButtonProps) => {
    return (
        <Button
            backgroundColor={props.backgroundColor}
            height={props.height}
            width={props.width}
            color={props.color}
            padding={props.padding}
            border={props.border}
            boxShadow={props.boxShadow}
            order={props.order}
        >
            {props.text.toUpperCase()}
        </Button>
    );
};

export default UIButton;
