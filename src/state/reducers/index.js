import { combineReducers } from "redux";
import { paymantReducer } from "./paymentReducer";

const reducer =combineReducers({
    payment:paymantReducer,
})
export default reducer;