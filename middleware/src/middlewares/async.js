export default function({ dispatch }) {
  return (next) => {
    return (action) => {
      console.log(action);

      next(action);
    };
  };
};
