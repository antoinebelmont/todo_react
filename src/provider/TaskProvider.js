import React,{useState,useCallback} from 'react';
import TaskContext from '../context/TaskContext';

const TaskProvider = (props) =>{
    const [task,setTask] = useState({});
    const setTaskDetail = useCallback((value) => setTask(value),[]);
    return (
        <TaskContext.Provider
            value={{task,setTaskDetail}}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;