import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk)) || compose

const store = createStore(rootReducer, composeEnhancer)

export default store