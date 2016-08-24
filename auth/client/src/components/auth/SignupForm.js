import React, { Component }   from 'react';
import { reduxForm }          from 'redux-form';

import * as actions           from '../../actions'

class SignupForm extends Component {
  handleFormSubmit(fields) {
    // Sign a new user up
    console.log('Creating: ', fields.email, fields.password);
    this.props.signupUser(fields);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;

    return (
      <div className="signup-form-container row">
        <h2 className="text-sm-center">Sign up for access</h2>

        <form className="col-sm-8 offset-sm-2" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <input {...email} type="email" className="form-control" placeholder="Email address"/>
            {email.touched && email.error && <div className="error">{email.error}</div>}
          </div>
          <div className="form-group">
            <input {...password} type="password" className="form-control" placeholder="Password"/>
            {password.touched && password.error && <div className="error">{password.error}</div>}
          </div>
          <div className="form-group">
            <input {...passwordConfirm} type="password" className="form-control" placeholder="Confirm Password"/>
            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
          </div>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>
    );
  }
}

function validate(fields) {
  const errors = {};

  if(!fields.email) {
    errors.email = 'You must enter a valid email address';
  }

  if(!fields.password || fields.password.length < 6) {
    errors.password = 'The password must be at least 6 characters';
  }

  if(fields.password !== fields.passwordConfirm) {
    errors.passwordConfirm = 'The password and confirmation must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(SignupForm);
