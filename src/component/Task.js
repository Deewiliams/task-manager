import React from "react";

export const Task = ({task}) => {
  return (
    <div className="flex flex-row items-center justify-between p-3 m-auto">
      <h1 className="text-sm text-center md:text-lg lg:text-xl">
        {task.title} 
      </h1>
      <div className="space-x-3">
        <button>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </div>
  );
};
