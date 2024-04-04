import styled, { css } from "styled-components";
import COLORS from "../../../constants/colors";

const primaryVariant = css`
  background-color: ${COLORS.BUTTON.PRIMARY.MAIN};
  color: ${COLORS.PALLATE.WHITE};
  letter-spacing: 0.5px;

  &:hover {
    background-color: ${COLORS.BUTTON.PRIMARY.HOVER};
    color: ${COLORS.PALLATE.BLACK};
  }
`;

const secondaryVariant = css`
  background-color: ${COLORS.BUTTON.SECONDARY.MAIN};
  color: ${COLORS.PALLATE.WHITE};
  letter-spacing: 0.5px;

  &:hover {
    background-color: ${COLORS.BUTTON.SECONDARY.HOVER};
  }
`;

// Function to get styles based on variant
const getVariantStyles = ({ variant = "primary" }) => {
  switch (variant) {
    case "secondary":
      return secondaryVariant;
    default:
      return primaryVariant;
  }
};

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  ${getVariantStyles}
`;

export { StyledButton };
