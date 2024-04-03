import styled from "styled-components";
import Button from "../../atoms/Button";

const ProductCardWrapper = styled.div`
  text-align: center;
  height: 350px;
  padding: 20px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ViewDetailsButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  // padding: 10px 30px;
`;

export { ProductCardWrapper, ViewDetailsButton };
