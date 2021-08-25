import React from 'react'
import {TaskList} from './TaskList'
import {Title} from './Title'

export const Task = () => {
    return (
        <div className="bg-gray-100 w-60 md:w-2/3 m-auto mt-10 border-2">
            <div className="p-2">
                <Title />
                <TaskList 
                
                />
            </div>
        </div>
    )
}
