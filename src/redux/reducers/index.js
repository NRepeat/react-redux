import { combineReducers } from "redux";
import toDoReduser from "./toDoReduser";
import counterReducer from "./counterReduser";
import superheroReducer from "./superHeroReduser";

const rootReducer = combineReducers({
  task: toDoReduser,
  counter: counterReducer,
  superhero: superheroReducer,
});

export default rootReducer;
