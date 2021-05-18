import React from 'react'
import useTask from '../hooks/useTask';

export default function Detail() {
    const {task} = useTask();
    console.log(task)
    return (
        <div>
            <div>ID:{task.id}</div>
            <div>Title:{task.title}</div>
        </div>
    )
}
