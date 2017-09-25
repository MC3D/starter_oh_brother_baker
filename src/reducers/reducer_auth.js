import { AUTH_USER, UNAUTH_USER } from './../actions/types.js';

const INITIAL_STATE = {};

export default function( state = INITIAL_STATE , action ) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state
  }
}
