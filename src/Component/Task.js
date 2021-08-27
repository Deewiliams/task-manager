import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";

export const Task = ({ task }) => {
  const [, , removeTask, ,findItem] = useContext(TaskListContext);
  return (
    <div className="flex flex-row items-center justify-between p-3 m-auto">
      <h1 className="text-sm text-center md:text-lg lg:text-xl">
        {task.title}
      </h1>
      <div className="space-x-3">
        <button onClick={() => removeTask(task.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </div>
  );
};
