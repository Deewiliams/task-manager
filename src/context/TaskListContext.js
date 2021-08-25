import React, { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

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
      setTask([...tasks,{title,id:uuidv4()}])
  }

  return (
  <TaskListContext.Provider value={[tasks,addTask]}>
      {props.children}
  </TaskListContext.Provider>
  )
};
