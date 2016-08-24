import React, { Component }   from 'react';
import { reduxForm }          from 'redux-form';

import * as actions           from '../../actions'

class LoginForm extends Component {
  handleFormSubmit({ email, password }) {
    // Log the user in
    console.log('Logging in: ', email, password);
    this.props.loginUser({ email, password });
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Error: </strong>{this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <div className="login-form-container row">
        <form className="col-sm-6 offset-sm-3" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <input {...email} type="email" className="form-control" placeholder="Email address"/>
          </div>
          <div className="form-group">
            <input {...password} type="password" className="form-control" placeholder="Password"/>
          </div>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Log in</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, mapStateToProps, actions)(LoginForm);
