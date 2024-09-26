import React from "react";
import { useFetch } from "../customHooks/useFetch";

const DisplayData = () => {

  const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts`);

  if (loading) return <p>Loding....</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <>
    <h1>Fetch data</h1>
      <ul>
        {data.map((items) => (
          <li key={items.title}>{items.title}</li>
        ))}
      </ul>
    </>
  );
};

export default DisplayData;
