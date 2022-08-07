import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventauthService from "./eventauthService";

// Get events from local storage
const events = JSON.parse(localStorage.getItem("events"));

const initialState = {
  events: events ? events : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Add event
export const addEvent = createAsyncThunk(
  "eventauth/addevent",
  async (event, thunkAPI) => {
    try {
      return await eventauthService.addevent(event);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all events
export const getAllEvents = createAsyncThunk(
  "eventauth/eventlogin",
  async (event, thunkAPI) => {
    try {
      return await eventauthService.getallevents(event);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const eventauthSlice = createSlice({
  name: "eventauth",
  initialState,
  reducers: {
    eventreset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = null;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.events = null;
      })
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = action.payload;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.events = null;
      });
  },
});

export const { eventreset } = eventauthSlice.actions;

export default eventauthSlice.reducer;
