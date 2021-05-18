import React, {useState,useCallback} from 'react';
import serviceContext from './serviceContext';

export default function listItemProvider(props) {
    const [task, setTask] = useState({});
    const setTaskDetail = useCallback((value) => setTask(value),[]);
    return (
        <serviceContext.Provider
            value={{
                task,
                setTaskDetail
            }}
        >
            {props.children}
        </serviceContext.Provider>
    )
}

