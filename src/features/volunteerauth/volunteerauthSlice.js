import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import volunteerauthService from "./volunteerauthService";

// Get volunteer from local storage
const volunteer =JSON.parse(localStorage.getItem("volunteer"));
const allvolunteers = JSON.parse(localStorage.getItem("vprofiles"));

const initialState = {
  volunteer: volunteer ? volunteer : null,
  allvolunteers: allvolunteers ? allvolunteers : null,
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


// Update Volunteer
export const volunteerUpdate = createAsyncThunk('volunteerauth/volunteerupdate', async (volunteerData, thunkAPI) => {
 try {
   return await volunteerauthService.volunteerupdate(volunteerData, volunteer.token);
 } catch (error) {
   const message =
     (error.response && error.response.data && error.response.data.message) ||
     error.message ||
     error.toString();

   return thunkAPI.rejectWithValue(message);
 }
})

// Get all Volunteers
export const getAllVolunteers = createAsyncThunk('volunteerauth/getallvolunteers', async (thunkAPI) => {
  try {
    return await volunteerauthService.getallvolunteers();
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
      .addCase(volunteerUpdate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(volunteerUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.volunteer = action.payload;
      })
      .addCase(volunteerUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.volunteer = null;
      })
      .addCase(getAllVolunteers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllVolunteers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allvolunteers = action.payload;
      })
      .addCase(getAllVolunteers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.allvolunteers = null;
      });
  },
});

export const { volunteerreset } = volunteerauthSlice.actions;

export default volunteerauthSlice.reducer;