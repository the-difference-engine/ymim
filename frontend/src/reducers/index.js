import { combineReducers } from 'redux';
import dogs from "./dogs";


const fetchData = combineReducers({
  dogs,
})

export default fetchData;