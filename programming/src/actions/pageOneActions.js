const ADD = 'ADD';
export const pageOneActions = {
  ADD,
};
const addValue = payload => {
  console.warn('payload', payload);
  return {
    type: ADD,
    payload
  };
};
 export {
  addValue
};