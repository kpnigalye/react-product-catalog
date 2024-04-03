import styled from "styled-components";

const ProductInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: center;
  column-gap: 40px;
`;

const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 200px;
  height: 200px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const Category = styled.span`
  background-color: #0478d5;
  padding: 10px 30px;
  color: white;
  text-transform: uppercase;
  border-radius: 20px;
  letter-spacing: 0.5px;
  font-size: 12px;
`;

const Price = styled.span`
  font-size: 48px;
  color: #ff8700;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Description = styled.span`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 32px;
  color: #241a75;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  font-family: sans-serif;
`;

export {
  ProductInfoWrapper,
  ProductImageWrapper,
  ProductImage,
  ProductDetails,
  Category,
  Price,
  Description,
  Title,
};
