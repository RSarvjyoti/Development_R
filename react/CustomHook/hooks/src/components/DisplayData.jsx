import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import useTimeout from "../customHooks/useTimeout";


const DisplayData = () => {
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts`);
  const [showData, setShowData] = useState(false);

  const clearTimeout = useTimeout(() => setShowData(true), 3000); 
  useEffect(() => {
    return () => {
      clearTimeout(); 
    };
  }, [clearTimeout]);

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Fetch Data</h1>
      {showData ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li> 
          ))}
        </ul>
      ) : (
        <p>Data will be displayed after 3 seconds...</p>
      )}
    </>
  );
};

export default DisplayData;
