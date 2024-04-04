import styled from "styled-components";
import COLORS from "../../../constants/colors";

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
  background-color: ${COLORS.BUTTON.PRIMARY.MAIN};
  padding: 10px 30px;
  color: ${COLORS.PALLATE.WHITE};
  text-transform: uppercase;
  border-radius: 20px;
  letter-spacing: 0.5px;
  font-size: 12px;
`;

const Price = styled.span`
  font-size: 48px;
  color: ${COLORS.TEXT.SECONDARY};
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
  color: ${COLORS.TEXT.PRIMARY};
  margin-top: 20px;
  font-weight: 500;
`;

const ProductRatings = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Ratings = styled.span`
  padding: 3px 15px;
  border-radius: 10px;
  background-color: ${COLORS.PALLATE.YELLOW};
  color: ${COLORS.PALLATE.PURPLE};
  font-weight: 600;
`;

const Count = styled.span`
  color: ${COLORS.PALLATE.PURPLE};
  font-weight: 600;
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
  ProductRatings,
  Ratings,
  Count,
};
