import { createSlice } from "@reduxjs/toolkit";

export const studentProfileSlice = createSlice({
  name: "studentProfileSlice",
  initialState: {},
  reducers: {
    setProfile: (state, action) => action.payload,
    updateImgSrc: (state, action) => {
      state.imgSrc = action.payload;
    },
  },
});

export const { setProfile, updateImgSrc } = studentProfileSlice.actions;
export default studentProfileSlice.reducer;
