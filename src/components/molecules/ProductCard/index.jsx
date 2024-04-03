/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { ProductCardWrapper, ViewDetailsButton } from "./ProductCard.styles";

function ProductCard({ product }) {
  return (
    <>
      <ProductCardWrapper>
        <img
          src={product.image}
          alt={name}
          style={{ width: "100%", height: "200px" }}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <Link key={product.id} to={`/products/${product.id}`}>
          <ViewDetailsButton>View Details</ViewDetailsButton>
        </Link>
      </ProductCardWrapper>
    </>
  );
}

export default ProductCard;
