import { browserHistory } from 'react-router';
import axios              from 'axios';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SIGNUP_USER }  from './types';
import { SET_MESSAGE }                                      from './types';

const ROOT_URL = 'http://localhost:3090';

export function loginUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to server login path

    axios.post(`${ROOT_URL}/login`, { email, password })
      .then(response => {
        // Update state to indicate that the user is authenticated
        // Save the returned JWT
        // Redirect to /feature

        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(() => dispatch(authError('Invalid email address or password')));
  };
}

export function logoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to server signup path

    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        // Update state to indicate that the user is authenticated
        // Save the returned JWT
        // Redirect to /feature

        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}

export function authError(error) {
  return { type: AUTH_ERROR, error }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, { headers: { authorization: localStorage.getItem('token') } })
      .then(response => {
        console.log(response)
        dispatch({ type: SET_MESSAGE, message: response.data.message })
      })
      .catch(error => {
        console.log(error.message);
        console.log(error.response);
      })
  }
}
