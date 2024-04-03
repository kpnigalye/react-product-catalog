import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/atoms/Button";
import Loader from "../../components/atoms/Loader";
import ProductInfo from "../../components/organisms/ProductInfo";
import useFetch from "../../hooks/useFetch";
import { PRODUCTS_ENDPOINT } from "../../constants";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, loading, error } = useFetch(PRODUCTS_ENDPOINT.GET(id));

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <ProductInfo product={product} />
      <Button variant="secondary" onClick={() => navigate(-1)}>
        Back
      </Button>
    </>
  );
}

export default ProductDetails;
