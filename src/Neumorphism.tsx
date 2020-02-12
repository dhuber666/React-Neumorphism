import React from "react";
import styled from "styled-components";
import useDimensions from "react-use-dimensions";

interface Props {
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  style?: React.CSSProperties | undefined;
  children?: React.ReactNode;
  currentWidth?: number;
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

const computeShadow = (width: number, color: string): string => {
  console.log("we got this width in func: ", width);
  const x = Math.round(Math.sqrt(width / 10));
  const y = Math.round(Math.sqrt(width / 10));
  console.log(x, y);
  const blur = Math.round(Math.sqrt(width / 10) + width / 20);

  const baseColor = color ? color : "#D1CDC7";

  return `box-shadow: -${x}px -${y}px ${blur}px ${colorLuminance(
    baseColor,
    0.1
  )}, ${x}px ${y}px ${blur}px ${colorLuminance(baseColor, -0.4)}`;
};

const colorLuminance = (hex: string, lum: number) => {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
};

const OuterShadow = styled.div<Props>`
  ${props => computeShadow(props.currentWidth!, props.backgroundColor!)};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : "auto"}px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "orange"};
  border: 0.5px solid rgba(255, 255, 255, 1);
  height: ${props => (props.height ? props.height : "auto")}px;
  width: ${props => (props.width ? props.width : "auto")}px;
`;

export default Neumorphism;
