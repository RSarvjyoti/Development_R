import React from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const FormForLocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "");


  return (
    <div>
      <h2>Set data into Local Storage</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
        />
    </div>
  );
};

export default FormForLocalStorage;
