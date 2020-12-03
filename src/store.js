import { combineReducers, configureStore } from "@reduxjs/toolkit";
import studentProfileReducer from "./views/StudentProfile/redux";
import studentSawtoothAccountReducer from "./views/AccountManagement/redux";

export const resetStore = () => {
  return {
    type: "RESET_STORE",
  };
};

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    state = undefined;
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({ studentProfileSlice: studentProfileReducer, sawtoothAccountsSlice: studentSawtoothAccountReducer });

export default configureStore({
  reducer: rootReducer,
});
