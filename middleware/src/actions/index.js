import { FETCH_USERS }  from './types';

export function fetchUsers(users) {
  return { type: FETCH_USERS, users: [
    { name: 'Julian' },
    { name: 'Jane' },
    { name: 'Fred' },
    { name: 'Alex' },
    { name: 'Jim' }
  ] };
};
