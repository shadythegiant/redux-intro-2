import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import { thunk } from "redux-thunk";

// import { createCustomer, updateName } from "./features/customer/customerSlice";

import { applyMiddleware, combineReducers, createStore } from "redux";

////

////

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
