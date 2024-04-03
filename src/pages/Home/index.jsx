import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/products">Product Catalog</Link>
    </>
  );
}

export default Home;
