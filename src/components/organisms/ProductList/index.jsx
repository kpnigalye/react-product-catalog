/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard";
import { ProductListWrapper } from "./ProductList.styles";

function ProductList({ products }) {
  return (
    <ProductListWrapper>
      {products.length > 0
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : "loading..."}
    </ProductListWrapper>
  );
}

export default ProductList;
