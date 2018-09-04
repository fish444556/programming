const initState = {
  val1: 0,
  val2: 0
};
 export default function(state = initState, action) {
  switch (action.type) {
    case 'ADD': {
      return {...state, value: parseFloat(action.payload.val1) + parseFloat(action.payload.val2)};
    }
     default: {
      return state;
    }
  }
}