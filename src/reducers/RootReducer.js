import { combineReducers } from 'redux';
import itemReducer from './ItemReducer';

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
