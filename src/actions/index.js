import $ from 'jquery';

import {
  FETCH_RECIPES,
  AUTH_USER
} from './types';

import { PARSE_BASE_URL, PARSE_HEADERS } from './../utility/parse';

export function signup(user) {
  console.log('user', user);
  return function(dispatch) {
    fetch(`${PARSE_BASE_URL}/users`, {
      method: "POST",
      body: user,
      headers: PARSE_HEADERS
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => {
      localStorage.setItem('user', JSON.stringify(result));
    })
    .then(() => {
      dispatch({ type: AUTH_USER })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export function login(user) {
  return function(dispatch) {
    fetch(`${PARSE_BASE_URL}/login?${$.param(user)}`, {
      headers: PARSE_HEADERS
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => {
      localStorage.setItem('user', JSON.stringify(result));
    })
    .then(() => {
      dispatch({ type: AUTH_USER })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export function fetchRecipes(dispatch) {
  return function(dispatch) {
    fetch(`${PARSE_BASE_URL}/classes/Recipe`, {
      headers: PARSE_HEADERS
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => {
      console.log(result.results);
      dispatch({ type: FETCH_RECIPES, payload: result.results })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export function addRecipe(recipe) {
  // fetch(`${PARSE_BASE_URL}/classes/Recipe`, {
  //   method: "POST",
  //   body: JSON.stringify(newRecipe),
  //   headers: PARSE_HEADERS
  // })
  // .then(response => {
  //   console.log('new recipe added');
  // })
  // .catch(err => {
  //   console.log(err)
  // });
}

// const SERVER_BASE_URL = 'http://localhost:1337'
const SERVER_BASE_URL = 'https://tiny-lasagna-server-new.herokuapp.com';
let url = `${SERVER_BASE_URL}/proxy`
let params = {
  camera: 'fhaz',
  sol: 1500,
  rover: 'Curiosity'
}

// fetch(`${url}?${$.param(params)}`)
// .then((response) => {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response.json();
// })
// .then((result) => {
//   console.log('photos', result.photos);
// })
// .catch((err) => {
//   console.log(err);
// })
