import Button from "../../components/atoms/Button";
import Loader from "../../components/atoms/Loader";
import BackButton from "../../components/molecules/BackButton";
import Pagination from "../../components/molecules/Pagination";
import ProductList from "../../components/organisms/ProductList";
import { useProductContext } from "../../hooks/useProductContext";
import { Title } from "./Catalog.styles";

export const Catalog = () => {
  const {
    products,
    loading,
    error,
    totalPages,
    currentPage,
    paginate,
    setFilterClicked,
    setSortClicked,
  } = useProductContext();

  if (loading) return <Loader />;
  if (error) {
    return (
      <>
        <div>Error: {error.message}</div>
        <BackButton />
      </>
    );
  }

  return (
    <>
      <Title>Product Catalog</Title>

      <Button onClick={() => setFilterClicked(true)}>Filter</Button>

      <Button onClick={() => setSortClicked(true)}>Sort</Button>

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
