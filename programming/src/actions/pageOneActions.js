const ADD = 'ADD';
export const pageOneActions = {
  ADD,
};
const addValue = payload => {
  return {
    type: ADD,
    payload
  };
};
 export {
  addValue
};