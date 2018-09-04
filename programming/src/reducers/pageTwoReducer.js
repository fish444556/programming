// import { CHANGE } from '../actions/pageTwoActions';

let initState = {
  color: 'black'
};
 export default function(state = initState, action) {
  switch (action.type) {
    case 'CHANGE': {
      return {...state, color: action.payload.color};
    }
     default: {
      return state;
    }
  }
}