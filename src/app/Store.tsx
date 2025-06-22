import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../reducers/resume/ResumeSlice";
import languageReducer from "../reducers/language/LanguageSlice";

export default configureStore({
  reducer: {
    resume: resumeReducer,
    language: languageReducer,
  },
});
