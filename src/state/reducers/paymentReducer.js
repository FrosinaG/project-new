import { actionConstants } from "../actionConstans";
const initionalStore = {
  paymant: {value:0},
};
export const paymantReducer = (state = {value:0}, action) => {
  switch (action.type) {
    case actionConstants.INCREMENT:
      return {
        value: state.value + action.payload,
      };
    case actionConstants.DECREMENT:
      return {
        value: state.value - action.payload,
      };
      case actionConstants.RESET:
        return {
          value:0
        };
        case actionConstants.MULTIPLE:
            return {
              value: state.value * action.payload,
            };
    default:
      return state;
  }
};
