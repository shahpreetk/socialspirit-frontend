import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventauthService from "./eventauthService";

// Get events from local storage
const events = JSON.parse(localStorage.getItem("events"));
const upcomingEvents = JSON.parse(localStorage.getItem("upcomingEvents"));
const pastEvents = JSON.parse(localStorage.getItem("pastEvents"));


const initialState = {
  events: events ? events : null,
  upcomingEvents: upcomingEvents ? upcomingEvents : null,
  pastEvents: pastEvents ? pastEvents : null,
  event: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Add event
export const addEvent = createAsyncThunk(
  "eventauth/addevent",
  async (event, thunkAPI) => {
    // Get organisation token from local storage
    const organisationToken = JSON.parse(
      localStorage.getItem("organisation")
    ).token;
    // Get organisation name from local storage
    const organisationName = JSON.parse(
      localStorage.getItem("organisation")
    ).name;
    // Get organisation ID from local storage
    const organisationId = JSON.parse(localStorage.getItem("organisation"))._id;
    try {
      event = {
        ...event,
        eventOwnerId: organisationId,
        eventOwnerName: organisationName,
      };
      return await eventauthService.addevent(event, organisationToken);
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
        state.event = action.payload;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.event = null;
      })
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = action.payload;
        state.upcomingEvents = action.payload.filter(
          (event) => new Date(event.date) > new Date()
        );
        state.pastEvents = action.payload.filter(
          (event) => new Date(event.date) < new Date()
        );
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
