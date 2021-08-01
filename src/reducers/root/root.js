import { combineReducers } from "redux";
import aboutReducer from "../about/aboutReducer";
import locationReducer from "../location/locationReducer";

const root = combineReducers({
  aboutReducer,
  locationReducer
});

export default root;