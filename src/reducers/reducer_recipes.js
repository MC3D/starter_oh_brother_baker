import { FETCH_RECIPES } from './../actions/types.js';

const INITIAL_STATE = [];

export default function( state = INITIAL_STATE , action ) {
  switch(action.type) {
    case FETCH_RECIPES:
      return action.payload
    default:
      return state
  }
}
