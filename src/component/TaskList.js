import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import { Task } from "./Task";

export const TaskList = () => {
  const [tasks] = useContext(TaskListContext);
  return (
    <div className="bg-gray-100 w-60 md:w-2/4 m-auto mt-10 border-2">
      <div className="p-2">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};
