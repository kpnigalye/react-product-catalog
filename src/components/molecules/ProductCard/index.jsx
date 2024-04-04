import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  ProductCardWrapper,
  ViewDetailsButton,
  ProductImage,
  ProductTitle,
  Price,
} from "./ProductCard.styles";

function ProductCard({ product }) {
  const { id, title, image, price } = product;

  return (
    <>
      <ProductCardWrapper>
        <ProductImage data-testid={`product-image-${id}`} imagesource={image} />
        <ProductTitle data-testid={`product-title-${id}`}>{title}</ProductTitle>
        <Price data-testid={`product-price-${id}`}>${price}</Price>
        <Link key={`product-card-${id}`} to={`/products/${id}`}>
          <ViewDetailsButton data-testid={`product-view-details-${id}`}>
            View Details
          </ViewDetailsButton>
        </Link>
      </ProductCardWrapper>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
