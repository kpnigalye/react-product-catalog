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
} from "./ProductInfo.styles";

function ProductInfo({ product }) {
  if (Object.keys(product).length === 0) {
    return <div>Product details are not available</div>;
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
        <Description>{description}</Description>
        <Category>{category}</Category>
        <Price>${price}</Price>
        <span>{`Ratings ${rate}(${count})`}</span>
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
