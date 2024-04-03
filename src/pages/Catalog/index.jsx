import ProductList from "../../components/organisms/ProductList";
import Loader from "../../components/atoms/Loader";
import useFetch from "../../hooks/useFetch";
import { PRODUCTS_ENDPOINT } from "../../constants";

export const Catalog = () => {
  const { data: products, loading, error } = useFetch(PRODUCTS_ENDPOINT.LIST);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
