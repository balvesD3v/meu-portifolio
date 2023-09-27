import styled, { createGlobalStyle } from "styled-components";
import "animate.css";

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.THEME.backgroundColor};
    color: ${({ theme }) => theme.THEME.fontColor};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;

  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.THEME.fontFamily};
    font-weight: bold;
    font-size: 16px;
    outline: none;
  }
`;

export const FadeImg = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  z-index: -99;
`;
