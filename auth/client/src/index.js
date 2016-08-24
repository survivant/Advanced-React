import React                                          from 'react';
import ReactDOM                                       from 'react-dom';
import { Provider }                                   from 'react-redux';
import { createStore, applyMiddleware }               from 'redux';
import reduxThunk                                     from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory }  from 'react-router'

import App               from './components/app';
import reducers          from './reducers';
import Welcome           from './components/Welcome'
import LoginForm         from './components/auth/LoginForm'
import Logout            from './components/auth/Logout'
import SignupForm        from './components/auth/SignupForm'
import Feature           from './components/Feature'
import requireAuth       from './components/auth/require_auth'

import { AUTH_USER }     from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store                     = createStoreWithMiddleware(reducers);

// If the token is present, the user is already logged in

const token = localStorage.getItem('token');

if(token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="login" component={LoginForm} />
        <Route path="logout" component={Logout} />
        <Route path="signup" component={SignupForm} />
        <Route path="feature" component={requireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container'));
