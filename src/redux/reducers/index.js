import { combineReducers } from "redux";
import toDoReduser from "./toDoReduser";
import counterReducer from "./counterReduser";



const rootReducer = combineReducers({
    task: toDoReduser,
    counter: counterReducer
  
})

export default rootReducer;