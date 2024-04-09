import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 data-testid="welcome-note">Welcome to Product Catalog!</h1>
      <Link to="/products">Click here</Link>
    </>
  );
}

export default Home;
