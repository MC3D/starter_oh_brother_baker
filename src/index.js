import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './components/app';
import RecipeList from './containers/recipe_list';
import RecipeForm from './containers/recipe_form';
import Login from './containers/login';
import Signup from './containers/signup';
import requireAuth from './components/require_auth';
import { AUTH_USER } from './actions/types';
// import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  // the connect is a HOC that is specifically made to make communciation with the Provider
  // Provider wraps Redux store (had direct access to the Redux store) and watches for changes
  // When changes occur, the Provider updates child components - broadcasting down to any connected components
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={ Signup } />
        <Route path='/login' component={ Login } />
        <Route path='/recipes' component={ requireAuth(RecipeList) } />
        <Route path='/newrecipe' component={ requireAuth(RecipeForm) } />
    </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
