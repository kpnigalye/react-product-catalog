import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
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
} from "./ProductInfo.styles";
import Button from "../../atoms/Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button variant="secondary" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
}

function ProductInfo({ product }) {
  if (Object.keys(product).length === 0) {
    return (
      <>
        <Description>Product details are not available</Description>
        <BackButton />
      </>
    );
  }

  const { title, image, category, description, price, rating } = product;
  const { rate, count } = rating;

  return (
    <ProductInfoWrapper>
      <ProductImageWrapper>
        <ProductImage src={image} alt={title} />
      </ProductImageWrapper>
      <ProductDetails>
        <Title>{title}</Title>
        <ProductRatings>
          <Category>{category}</Category>
          <Ratings>{rate}/5</Ratings>
          <Count>({count} Ratings)</Count>
        </ProductRatings>
        <Description>{description}</Description>
        <Price>${price}</Price>
        <BackButton />
      </ProductDetails>
    </ProductInfoWrapper>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductInfo;
