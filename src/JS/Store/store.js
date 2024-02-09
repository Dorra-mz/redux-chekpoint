import { createStore } from 'redux';
import taskReducer from '../Reducers/taskreducers';
const store = createStore(taskReducer);
export default store;