import Loader from "../../components/atoms/Loader";
import Pagination from "../../components/molecules/Pagination";
import ProductList from "../../components/organisms/ProductList";
import { useProductContext } from "../../hooks/useProductContext";

export const Catalog = () => {
  const { products, loading, error, totalPages, currentPage, paginate } =
    useProductContext();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default Catalog;
