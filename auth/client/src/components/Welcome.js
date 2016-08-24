import React      from 'react';
import { Link }   from 'react-router'

export default () =>
  <div className="jumbotron">
    <h1 className="display-3">Welcome</h1>
    <p className="lead">This is a slightly less simple homepage than Stephen's</p>
    <Link to="/signup" className="btn btn-primary btn-lg" role="button">Sign up</Link>
  </div>
