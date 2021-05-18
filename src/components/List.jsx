import React, {useState,useRef,useContext} from 'react';
import { Link } from "react-router-dom";
import useTask from '../hooks/useTask';
//import TaskContext from "../context/TaskContext";


function List() {
    //const {setTaskDetail} = useContext(TaskContext);
    const {setTaskDetail} = useTask();

    console.log(setTaskDetail);
    const [items, setItems] = useState([{
            id: "1",
            title: "ejemplo"
        },{
            id: "2",
            title: "otro"
        }])
    const [input,setInput] = useState();

    const inputRef = useRef();
    const getNewId = () => {
        return Math.max(...items.map(item => item.id))+1;
    }
    const handleClick = () => {
        setItems([
            ...items,
            {id:getNewId().toString(),title:input}
        ])
    }
    const handleTaskClick = (taskId) =>{
        let task = items.find(function(item, index) {
            if(item.id == taskId)
                return true;
        });
        setTaskDetail(task);
    }

    return (
        <div>
            <input type="text" ref={inputRef} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleClick}>Add</button>
            <ul> {items.map((item) => (
                    <li key={item.id} onClick={() => handleTaskClick(item.id)}>
                        <Link to={item.id}>{item.title}</Link>
                    </li>
                ))
            } </ul>
        </div>
    )
}

export default List;