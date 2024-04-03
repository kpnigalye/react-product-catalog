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
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const ViewDetailsButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.imagesource});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #283593;
  font-family: sans-serif;
  height: 30%;
`;

const Price = styled.span`
  font-size: 48px;
  color: #ff0000;
  font-weight: 600;
  margin-bottom: 30px;
  height: 20%;
`;

export {
  ProductCardWrapper,
  ViewDetailsButton,
  ProductImage,
  ProductTitle,
  Price,
};
