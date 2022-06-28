import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import volunteerauthService from "./volunteerauthService";

// Get volunteer from local storage
const volunteer =JSON.parse(localStorage.getItem("volunteer"));

const initialState = {
  volunteer: volunteer ? volunteer : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};


// Register new Volunteer
export const volunteerRegister = createAsyncThunk('volunteerauth/volunteerregister', async (volunteer, thunkAPI) => {
  try {
    return await volunteerauthService.volunteerregister(volunteer);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message)
  }
})

// Login Volunteer
export const volunteerLogin = createAsyncThunk('volunteerauth/volunteerlogin', async (volunteer, thunkAPI) => {
 try {
   return await volunteerauthService.volunteerlogin(volunteer);
 } catch (error) {
   const message =
     (error.response && error.response.data && error.response.data.message) ||
     error.message ||
     error.toString();

   return thunkAPI.rejectWithValue(message);
 }
})

// Logout Volunteer
export const volunteerLogout = createAsyncThunk('volunteerauth/volunteerlogout', async () => {
  await volunteerauthService.volunteerlogout();
 })

export const volunteerauthSlice = createSlice({
  name: "volunteerauth",
  initialState,
  reducers: {
    volunteerreset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(volunteerRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(volunteerRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.volunteer = null;
      })
      .addCase(volunteerRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.volunteer = null;
      })
      .addCase(volunteerLogout.fulfilled, (state) => {
        state.volunteer = null;
      })
      .addCase(volunteerLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(volunteerLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.volunteer = action.payload;
      })
      .addCase(volunteerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.volunteer = null;
      })
  },
});

export const { volunteerreset } = volunteerauthSlice.actions;

export default volunteerauthSlice.reducer;