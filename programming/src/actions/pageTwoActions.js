const CHANGE = 'CHANGE';
export const pageTwoActions = {
  CHANGE,
};
const changeColor = payload => {
  return {
    type: CHANGE,
    payload
  };
};
export {
  changeColor
};