/* eslint-disable react/prop-types */

function ProductInfo({ product }) {
  return (
    <>
      <img
        src={product.image}
        alt={product.title}
        width="200px"
        height="200px"
      />
      <h4>{product.title}</h4>
      <div>{product.description}</div>
      <h4>{product.price}</h4>
    </>
  );
}

export default ProductInfo;
