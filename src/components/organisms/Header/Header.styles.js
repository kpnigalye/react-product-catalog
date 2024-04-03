import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  gap: 20px;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 56px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #283593;
  font-family: sans-serif;
  cursor: pointer;
`;

export { Logo, Wrapper, Title };
