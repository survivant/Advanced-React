import React                                          from 'react';
import ReactDOM                                       from 'react-dom';
import { Provider }                                   from 'react-redux';
import { createStore, applyMiddleware }               from 'redux';
import reduxThunk                                     from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory }  from 'react-router'

import App               from './components/app';
import reducers          from './reducers';
import LoginForm         from './components/auth/LoginForm'
import Logout            from './components/auth/Logout'
import SignupForm        from './components/auth/SignupForm'
import Feature           from './components/Feature'
import requireAuth       from './components/auth/require_auth'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginForm} />
        <Route path="logout" component={Logout} />
        <Route path="signup" component={SignupForm} />
        <Route path="feature" component={requireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container'));
