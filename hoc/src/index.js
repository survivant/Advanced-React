import React            from 'react';
import ReactDOM         from 'react-dom';
import { Router, Route, browserHistory }  from 'react-router';

import { Provider }     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App              from './components/app';
import requireAuth      from './components/require_auth';
import Resources        from './components/Resources';
import reducers         from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container'));
