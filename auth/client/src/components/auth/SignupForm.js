import React, { Component }   from 'react';
import { reduxForm }          from 'redux-form';

import * as actions           from '../../actions'

class SignupForm extends Component {
  handleFormSubmit({ email, password, passwordConf }) {
    if(!email || !password || !passwordConf) {
      return this.props.authError("You must enter an email address, password, and confirmation");
    }

    if(password !== passwordConf) {
      return this.props.authError("The password and confirmation do not match");
    }

    if(password.length < 6) {
      return this.props.authError("The password must be at least 6 characters");
    }

    // Sign a new user up
    console.log('Creating: ', email, password);
//    this.props.loginUser({ email, password });
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
    const { handleSubmit, fields: { email, password, passwordConf } } = this.props;

    return (
      <div className="signup-form-container row">
        <h2 className="text-sm-center">Sign up for access</h2>

        <form className="col-sm-8 offset-sm-2" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <input {...email} type="email" className="form-control" placeholder="Email address"/>
          </div>
          <div className="form-group">
            <input {...password} type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <input {...passwordConf} type="password" className="form-control" placeholder="Confirm Password"/>
          </div>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConf']
}, mapStateToProps, actions)(SignupForm);
