import React, { Component } from 'react';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    }
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
        <button action="submit">Add Comment</button>
      </form>
    )
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ comment: '' });
  }
}
