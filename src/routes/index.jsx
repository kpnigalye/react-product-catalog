import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/layouts/Default";
import { Home, Catalog, ProductDetails } from "../pages/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="products" element={<Catalog />} />
      <Route path="products/:id" element={<ProductDetails />} />
    </Route>
  )
);

export default router;
