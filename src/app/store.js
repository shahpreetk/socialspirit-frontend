import { configureStore } from "@reduxjs/toolkit";
import volunteerauthReducer from "../features/volunteerauth/volunteerauthSlice";

export const store = configureStore({
  reducer: {
    volunteerauth: volunteerauthReducer,
  },
});
