import { browserHistory } from 'react-router';
import axios              from 'axios';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR }  from './types';

const ROOT_URL = 'http://localhost:3090';

export function loginUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to server login path

    axios.post(`${ROOT_URL}/login`, { email, password }).then(response => {
      // Update state to indicate that the user is authenticated
      // Save the returned JWT
      // Redirect to /feature

      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    }).catch(() => {
      // - Show an error to the user

      console.log('Login error');
      dispatch(authError('Invalid email address or password'));
    });
  };
}

export function logoutUser() {
  localStorage.removeItem('token');
  
  return { type: UNAUTH_USER };
}

export function authError(error) {
  return { type: AUTH_ERROR, error }
}
