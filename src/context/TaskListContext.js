import React, { createContext, useState } from "react";

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

  return (
  <TaskListContext.Provider value={[tasks]}>
      {props.children}
  </TaskListContext.Provider>
  )
};
