import React,{useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'

export const TaskList = () => {
    const [tasks] = useContext(TaskListContext);
    return (
        <div className="bg-gray-100 w-2/4 m-auto">
                {
                    tasks.map((task)=> {
                        return(
                        <div className="flex flex-row items-center justify-between">
                            <h1 className="text-sm text-center ">{task.title}</h1>
                            <div>
                                <button>
                                  <i className="fas fa-trash-alt"></i>  
                                </button>
                                <button>
                                  <i className="fas fa-pen"></i>  
                                </button>
                                 </div>
                        </div>
                        )
                    })
                }
            
           
        </div>
    )
}
