import { legacy_createStore as createStore } from "redux";
import reducer from "./reducers/counterReduser";



const store = createStore(reducer);

export default store;
