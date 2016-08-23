import axios            from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function loginUser({ email, password }) {
  return function(dispatch) {
    // Submit email and password to server login path

    axios.post(`${ROOT_URL}/login`, { email, password });

    // If good
    // - Update state to indicate that the user is authenticated
    // - Save the returned JWT
    // - redirect to /feature


    // If bad
    // - Show an error to the user
  };
}
