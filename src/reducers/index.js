import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  recipes: RecipesReducer,
  auth: AuthReducer
});

export default rootReducer;
