function personalities(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_SCORE': {
      return {
        ...state,
        [action.personality]: state[action.personality] + action.points
      };
    }
    case 'DECREMENT_SCORE':
      return {
        ...state,
        [action.personality]: state[action.personality] + action.points
      };
    default:
      return state;
  }
}

export default personalities;
