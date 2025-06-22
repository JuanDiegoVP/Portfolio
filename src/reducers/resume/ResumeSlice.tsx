import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    activeSection: "AboutMe",
  },
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = resumeSlice.actions;
export default resumeSlice.reducer;
