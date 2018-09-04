const initState = {
  val1: 0,
  val2: 0
};
 export default function(state = initState, action) {
  console.warn('reduxer action.payload', action.payload);
  // const { val1, val2 } = action.payload;
  switch (action.type) {
    case 'ADD': {
      return {...state, value: action.payload.val1 + action.payload.val2};
    }
     default: {
      return state;
    }
  }
}