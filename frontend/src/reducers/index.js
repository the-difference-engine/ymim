import { combineReducers } from 'redux';
import notes from "./notes";


const fetchData = combineReducers({
  notes,
})

export default fetchData;