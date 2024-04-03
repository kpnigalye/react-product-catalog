const API_REQUEST_TIMEOUT = 5000;

const PRODUCTS_ENDPOINT = {
  LIST: "/products",
  GET: (id) => `/products/${id}`,
};

export { API_REQUEST_TIMEOUT, PRODUCTS_ENDPOINT };
