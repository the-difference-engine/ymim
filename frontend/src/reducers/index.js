import { combineReducers } from "redux";
import events from "./events";
import strapi from "./strapi";

const fetchData = combineReducers({
  events,
  strapi
});

export default fetchData;
