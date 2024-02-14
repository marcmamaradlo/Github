import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>404 Page not found</h1>
      <p>
        go back <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default PageNotFound;
