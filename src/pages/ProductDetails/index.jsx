import { useParams } from "react-router-dom";
import Loader from "../../components/atoms/Loader";
import BackButton from "../../components/molecules/BackButton";
import ProductInfo from "../../components/organisms/ProductInfo";
import useFetch from "../../hooks/useFetch";
import { PRODUCTS_ENDPOINT } from "../../constants/api";

function ProductDetails() {
  const { id } = useParams();

  const { data: product, loading, error } = useFetch(PRODUCTS_ENDPOINT.GET(id));

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
      <ProductInfo product={product} />
    </>
  );
}

export default ProductDetails;
