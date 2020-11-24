import { configureStore } from "@reduxjs/toolkit";
import studentProfileReducer from "./views/StudentProfile/redux";

export default configureStore({
  reducer: {
    studentProfile: studentProfileReducer,
  },
});
