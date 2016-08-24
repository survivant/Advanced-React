import { browserHistory } from 'react-router';
import axios              from 'axios';

import { AUTH_USER }      from './types';

const ROOT_URL = 'http://localhost:3090';

export function loginUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to server login path

    axios.post(`${ROOT_URL}/login`, { email, password }).then(response => {
      // Update state to indicate that the user is authenticated

      dispatch({ type: AUTH_USER });

      // Save the returned JWT

      localStorage.setItem('token', response.data.token);
      
      // Redirect to /feature

      browserHistory.push('/feature');
    }).catch(() => {
      // If bad
      // - Show an error to the user
    });
  };
}
