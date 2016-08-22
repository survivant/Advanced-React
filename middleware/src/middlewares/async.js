// Take care of asynchronous requests with promises.

export default function({ dispatch }) {
  return (next) => {
    return (action) => {
      // Forward on the resolved version, or any unrelated action
      if(!action.users || !action.users.then) {
        console.log('Forwarding', action)
        return next(action);
      }

      console.log('Promise: ', action);

      // Resolve the action's Promise
      action.users.then((response) => {
        // Create a new action with the response data ...
        const newAction = { ...action, users: response };

        /// ... and dispatch it through all the middleware again.
        dispatch(newAction);
      });
    };
  };
};
