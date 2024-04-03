import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./index.styles";

function Button({ children, onClick, type = "button", ...props }) {
  return (
    <StyledButton type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.arrayOf(React.Node),
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
