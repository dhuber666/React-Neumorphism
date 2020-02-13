import React from "react";
import styled from "styled-components";
import useDimensions from "react-use-dimensions";
import { computeShadow } from "../helpers/index";

interface Props {
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  style?: React.CSSProperties | undefined;
  children?: React.ReactNode;
  inverted?: boolean;
}

interface ShadowProps {
  currentWidth: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  inverted?: boolean;
}

const Neumorphism = ({ style, children, ...rest }: Props) => {
  const [ref, { width: currentWidth = 1 }] = useDimensions();
  console.log(currentWidth);

  return (
    <OuterShadow
      style={{ ...style }}
      ref={ref}
      {...rest}
      currentWidth={currentWidth}
    >
      {children}
    </OuterShadow>
  );
};

const OuterShadow = styled.div<ShadowProps>`
  ${props =>
    computeShadow(
      props.currentWidth!,
      props.backgroundColor!,
      props.inverted!
    )};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "0")}px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "orange"};
  border: 0.2px solid rgba(255, 255, 255, 0.4);
  height: ${props => (props.height ? props.height : "auto")}px;
  width: ${props => (props.width ? props.width : "auto")}px;
`;

export default Neumorphism;
