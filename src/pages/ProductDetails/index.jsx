import { useNavigate, useParams } from "react-router-dom";
import ProductInfo from "../../components/organisms/ProductInfo";
import useFetch from "../../hooks/useFetch";
import { PRODUCTS_ENDPOINT } from "../../constants";
import Button from "../../components/atoms/Button";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, loading, error } = useFetch(PRODUCTS_ENDPOINT.GET(id));

  if (loading) return <div>Loading Product details...</div>;
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
