import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ProductProvider } from "./context/ProductContext";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  );
}

export default App;
