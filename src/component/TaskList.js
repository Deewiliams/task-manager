import React,{useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'

export const TaskList = () => {
    const [tasks] = useContext(TaskListContext);
    return (
        <div className="bg-gray-100 w-2/4 m-auto">
                {
                    tasks.map((task)=> {
                        return(<h1 className="text-sm text-center ">{task.title}</h1>)
                    })
                }
            
           
        </div>
    )
}
