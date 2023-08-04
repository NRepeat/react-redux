import { legacy_createStore as createStore ,applyMiddleware} from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootSaga from "./sagas";
import { configureStore } from '@reduxjs/toolkit'
import superheroReducer from "./reducers/superHeroReduser";


const store = configureStore({
  reducer: {
    
    superhero: superheroReducer
  }
});
// const sagaMW = createSagaMiddleware();
// const enchancer = applyMiddleware(sagaMW);
// const store = createStore(rootReducer, composeWithDevTools(enchancer));
// sagaMW.run(rootSaga);
export default store;
