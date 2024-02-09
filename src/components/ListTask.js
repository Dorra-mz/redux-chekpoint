import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleTask , filterTasks} from "../JS/Actions/taskaction";


const ListTask = () => {
    const tasks = useSelector (state=> state.tasks.tasks);
    const filter = useSelector (state=> state.tasks.filter);
    const dispatch = useDispatch ();
     

    const handleToggleTask = (id)=> {
        dispatch(toggleTask(id));
    };
    const handleFilterTasks = (filterType) => {
        dispatch(filterTasks (filterType));
 
    };

return ( 
<div> 
    <div>
        <button onClick={()=> handleFilterTasks('ALL')}>ALL</button>
        <button onClick={()=> handleFilterTasks('DONE')}>Done</button>
        <button onClick={()=> handleFilterTasks('NOT_DONE')}>Not Done</button>
    </div>
<ul> 
{tasks.filter(task => { 
if (filter === 'All') return true ;
if (filter === 'DONE') return task.isDone;
if (filter === 'NOT_DONE') return !task.isDone; 
return true ;
}).map(task => (
     <li key ={task.id} style = {{textDecoration : task.isDone ? 'line-through': 'none'}}
onClick = {()=> handleToggleTask(task.id)}> 
{task.description} </li>
))}
</ul>
</div> 
);


};

export default ListTask;
