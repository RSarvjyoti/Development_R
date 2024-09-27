import React, { useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { useDebounce } from "../customHooks/useDebounce";
import { useFetch } from "../customHooks/useFetch";

const FormForLocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const url = `https://jsonplaceholder.typicode.com/posts?title_like=${debouncedSearchTerm}`;

  const { data = [], loading, error } = useFetch(url);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Set data into Local Storage</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name..."
      />

      <h2>Search Data by Title</h2>

      <form>
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>

      <ul>
        {data.length > 0 ? (
          data.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
      
    </div>
  );
};

export default FormForLocalStorage;
