import React, { Component }   from 'react';
import { reduxForm }          from 'redux-form';

class LoginForm extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input {...email} type="text" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} type="password" className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Log in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginForm);
