import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/Actions/taskaction";


const Task = ({id , description})=> {    
  const [editMode , setEditMode]= useState(false);
  const [newDescription , setNewDescription]= useState (description);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch (editTask (id , newDescription));
    setEditMode(false) ;
  };

return (
  <div>
  {editMode ? ( 
   
  <div> 

    <input type="text" value={newDescription} onChange={(e)=> setNewDescription (e.target.value)}/>
    <button onClick={handleEditTask}>Save</button>
    <button onClick={()=>setEditMode(false)}>Cancel</button>
  
</div> 
 ):(
  <div>
<span>{description}</span>
<button onClick={()=> setEditMode(true)}>Edit</button>
</div>)}

</div> 

);

};

export default Task;