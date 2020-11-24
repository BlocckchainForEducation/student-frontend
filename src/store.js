import { combineReducers, configureStore } from "@reduxjs/toolkit";
import studentProfileReducer from "./views/StudentProfile/redux";

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

const appReducer = combineReducers({ studentProfile: studentProfileReducer });

export default configureStore({
  reducer: rootReducer,
});
