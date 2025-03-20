import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import {
  deposit,
  requestLoan,
  payLoan,
  withdraw,
} from "./features/account/accountSlice";
import { createCustomer, updateName } from "./features/customer/customerSlice";

import { combineReducers, createStore } from "redux";

////

////

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;
