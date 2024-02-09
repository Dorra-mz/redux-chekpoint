
import {ADD_TASK , TOGGLE_TASK, EDIT_TASK , FILTER_TASKS} from '../Constants/action-Types';
export const addTask = (description) => ({
    type : ADD_TASK,
    playload :{ id : Math.random(),description,
    isDone : false }
});


export const toggleTask = (id) => ({
    type:TOGGLE_TASK,
    playload : id 
});

export const editTask = (id , description) => ({
    type : EDIT_TASK,
    playload : { id, description}
});

export const filterTasks = (filterType)=> ({
    type: FILTER_TASKS,
    playload : {filterType}
});