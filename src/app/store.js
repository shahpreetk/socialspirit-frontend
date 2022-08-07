import { configureStore } from "@reduxjs/toolkit";
import volunteerauthReducer from "../features/volunteerauth/volunteerauthSlice";
import organisationauthReducer from "../features/organisationauth/organisationauthSlice";
import eventauthReducer from "../features/eventauth/eventauthSlice";

export const store = configureStore({
  reducer: {
    volunteerauth: volunteerauthReducer,
    organisationauth: organisationauthReducer,
    eventauth: eventauthReducer,
  },
});
