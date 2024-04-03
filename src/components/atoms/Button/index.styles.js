import styled, { css } from "styled-components";

const primaryVariant = css`
  background-color: #00203fff;
  color: white;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #adefd1ff;
    color: black;
  }
`;

const secondaryVariant = css`
  background-color: #e3165b;
  color: white;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #3c1053ff;
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
