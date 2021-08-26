import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

export const TaskListContextProvider = (props) => {
  const [tasks, setTask] = useState([
    {
      title: "Read the book",
      id: 1,
    },
    {
      title: "Wash the car",
      id: 2,
    },
    {
      title: "Write some code",
      id: 3,
    },
  ]);

  const addTask = (title) => {
    setTask([...tasks, { title, id:uuidv4()}]);
  };

  const clearList = () => {
    setTask([]);
  }

  const removeTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTask(filteredTasks);
  };

  return (
    <TaskListContext.Provider value={[tasks, addTask,removeTask,clearList]}>
      {props.children}
    </TaskListContext.Provider>
  );
};
