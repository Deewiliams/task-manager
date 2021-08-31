import React, { useContext, useState,useEffect} from "react";
import { TaskListContext } from "../Context/TaskListContext";

export const TaskInput = () => {
  const [, addTask, , clearList, , , editItem,editTask] = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(editItem === null){
      addTask(title);
      setTitle("");
    }else {
      editTask(title,editItem.id);
    }
  };

  useEffect(() => {
    if(editItem !== null) {
      setTitle(editItem.title);
    }else {
      setTitle("");
    }
  },[editItem])
  
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 w-60 md:w-2/4 m-auto mt-10 border-2"
    >
      <input
        className="placeholder-gray-500 border-2 h-10 rounded-md
        p-2 w-52 md:w-2/3 md:ml-24 lg:ml-46 m-2 placeholder-opacity-100 ..."
        placeholder="Add Task"
        required
        value={title}
        onChange={handleChange}
      />
      <div className="space-x-3 ml-6 pb-2">
        <button
          className="bg-red-600 text-sm h-6 md:h-10 md:w-24  w-20 md:ml-52 lg:ml-60 rounded-md"
          type="submit"
        >
          Add Task
        </button>
        <button onClick={clearList} className="bg-red-600 text-sm h-6 md:h-10 md:w-24  w-20 md:ml-52 rounded-md">
          Clear
        </button>
      </div>
    </form>
  );
};
