import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import root from "../reducers/root/root";

const store = createStore(root, applyMiddleware(thunk));

export default store;