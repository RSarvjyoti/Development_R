import React, { useState } from "react";
import TaskList from "./TaskList";
import axios from "axios";

const data_url = "http://localhost:8080/task";

export const MyFrom = () => {

  //   const [title, setTitle] = useState("");
  //   const [completed, setCompleted] = useState(false);
  //   const [assignTo, setAssignTo] = useState("");

  const initialState = {
    title: "",
    completed: false,
    assignTo: "",
  }

  const [task, setTask] = useState([]);

  const [data, setData] = useState(initialState);

  // getting from the axios
  const getData = () => {
    axios.get(data_url).then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // genrate random id
    const newData = { ...data };

    setTask((prev) => [...prev, newData]);

    // add data into db.json
    axios.post(data_url, newData).then(() => {
      getData();
    });

    console.log(task);

    setData("");
  };

  const handleChange = (e) => {
    const { name, type } = e.target;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          value={data.title}
          onChange={handleChange}
        />
        <br />
        <label>Status</label>
        <input
          name="completed"
          type="checkbox"
          checked={data.completed}
          onChange={handleChange}
        />
        <br />
        <select name="assignTo" value={data.assignTo} onChange={handleChange}>
          <option value="">Assign task</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <button type="type">Submit</button>
      </form>
      <button onClick={() => getData()}>Get data</button>

      <TaskList task={task} />

    </>
  );
};
