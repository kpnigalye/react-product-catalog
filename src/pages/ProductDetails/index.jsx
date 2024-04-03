import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductInfo from "../../components/organisms/ProductInfo";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response?.data);
    });
  }, [id]);

  return (
    <>
      <h2>Product Details of Product {id}</h2>
      {Object.keys(product).length > 0 ? (
        <ProductInfo product={product} />
      ) : (
        "loading product details.."
      )}
    </>
  );
}

export default ProductDetails;
