import React, { Component }  from 'react';
import { connect }           from 'react-redux';
import * as actions          from '../actions'

export class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    }
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
        <div>
          <button action="submit">Add Comment</button>
        </div>
      </form>
    )
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    // The way I learnt previously
    // const { dispatch } = this.props;
    // dispatch(actions.saveComment(this.state.comment));

    // His way
    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  }
}

export default connect(null, actions)(CommentForm);
