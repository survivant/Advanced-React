import React                                        from 'react';
import ReactDOM                                     from 'react-dom';
import { Provider }                                 from 'react-redux';
import { createStore, applyMiddleware }             from 'redux';
import reduxThunk                                   from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'

import App               from './components/app';
import reducers          from './reducers';
import LoginForm         from './components/auth/LoginForm'
import Logout            from './components/auth/Logout'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginForm} />
        <Route path="logout" component={Logout} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container'));
