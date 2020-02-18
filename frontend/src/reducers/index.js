import { combineReducers } from "redux";
import events from "./events";
import email from "./email";

const fetchData = combineReducers({
  events,
  email
});

export default fetchData;
