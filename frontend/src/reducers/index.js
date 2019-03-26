import { combineReducers } from "redux";
import items from "./demo";
import events from "./events";

const fetchData = combineReducers({
  events
});

export default fetchData;
