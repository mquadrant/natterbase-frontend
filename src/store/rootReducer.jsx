import { combineReducers } from "redux";
import {
  applicationReducer,
  statisticReducer
} from "../containers/Dashboard/redux/reducer";

const rootReducer = combineReducers({
  applications: applicationReducer,
  statistics: statisticReducer
});

export default rootReducer;
