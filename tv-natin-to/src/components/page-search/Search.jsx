import React from "react";
import { useParams } from "react-router-dom";
// import Banner from "../banner/Banner";

const Search = () => {
  const params = useParams();
  return (
    <div className="search-component">
      <h1>{params.query}</h1>
    </div>
  );
};

export default Search;
