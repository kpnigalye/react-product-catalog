import { createContext, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import { PRODUCTS_ENDPOINT } from "../constants/api";
import { PRODUCTS_PER_PAGE } from "../constants";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { data, loading, error } = useFetch(PRODUCTS_ENDPOINT.LIST);
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) return;

  const totalPages = Math.floor(data.length / PRODUCTS_PER_PAGE);
  const indexOfLastItem = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - PRODUCTS_PER_PAGE;
  const products = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        totalPages,
        currentPage,
        paginate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
