import React, { Component } from 'react';

import CommentForm          from './CommentForm';
import CommentList          from './CommentList';

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}
