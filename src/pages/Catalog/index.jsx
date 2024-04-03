// import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../../components/organisms/ProductList";

export const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response?.data);
    });
  }, []);

  return (
    <>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
