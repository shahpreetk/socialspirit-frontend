import { configureStore } from "@reduxjs/toolkit";
import volunteerauthReducer from "../features/volunteerauth/volunteerauthSlice";
import organisationauthReducer from "../features/organisationauth/organisationauthSlice";

export const store = configureStore({
  reducer: {
    volunteerauth: volunteerauthReducer,
    organisationauth: organisationauthReducer,
  },
});
