/** Reference: https://cssloaders.github.io/ */

import styled, { keyframes } from "styled-components";
import COLORS from "../../../constants/colors";

// Keyframes for rotation animation
const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.span`
  width: 60px;
  height: 60px;
  border: 3px solid ${COLORS.PALLATE.WHITE};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid;
    border-color: ${COLORS.PALLATE.ORANGE} transparent;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { LoadingIcon, Wrapper };
