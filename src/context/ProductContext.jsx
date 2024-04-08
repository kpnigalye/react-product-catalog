import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import { PRODUCTS_ENDPOINT } from "../constants/api";
import { PRODUCTS_PER_PAGE } from "../constants";
import { sortByKey } from "../utils/helper";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { data, loading, error } = useFetch(PRODUCTS_ENDPOINT.LIST);
  const [currentPage, setCurrentPage] = useState();
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [filterClicked, setFilterClicked] = useState(false);
  const [sortClicked, setSortClicked] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const paginate = (number = 1) => {
    setCurrentPage(number);
  };

  const indexOfLastItem = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - PRODUCTS_PER_PAGE;

  useEffect(() => {
    setProducts(filteredData.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage]);

  useEffect(() => {
    setTotalPages(Math.floor(data.length / PRODUCTS_PER_PAGE));
    setFilteredData(data);
    setProducts(data.slice(indexOfFirstItem, indexOfLastItem));
    paginate();
  }, [data]);

  useEffect(() => {
    if (sortClicked) {
      const sorted = sortByKey(filteredData, "price");
      setFilteredData(sorted);
      setProducts(sorted.slice(indexOfFirstItem, indexOfLastItem));
      if (currentPage > 1) {
        paginate();
      }
    }
  }, [sortClicked]);

  useEffect(() => {
    if (filterClicked) {
      const filtered = filteredData.filter((product) => product.price < 100);
      setTotalPages(
        Math.floor(filtered.length / PRODUCTS_PER_PAGE) +
          (Math.floor(filtered.length % PRODUCTS_PER_PAGE) > 0 ? 1 : 0)
      );
      setFilteredData(filtered);
      paginate();
    }
  }, [filterClicked]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        totalPages,
        currentPage,
        paginate,
        setFilterClicked,
        setSortClicked,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
