import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import organisationauthService from "./organisationauthService";

// Get organisation from local storage
const organisation =JSON.parse(localStorage.getItem("organisation"));

const initialState = {
  organisation: organisation ? organisation : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};


// Register new Organisation
export const organisationRegister = createAsyncThunk(
  "organisationauth/organisationregister",
  async (organisation, thunkAPI) => {
    try {
      return await organisationauthService.organisationregister(organisation);
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

// Login Organisation
export const organisationLogin = createAsyncThunk('organisationauth/organisationlogin', async (organisation, thunkAPI) => {
 try {
   return await organisationauthService.organisationlogin(organisation);
 } catch (error) {
   const message =
     (error.response && error.response.data && error.response.data.message) ||
     error.message ||
     error.toString();

   return thunkAPI.rejectWithValue(message);
 }
})

// Update Organisation
export const organisationUpdate = createAsyncThunk('organisationauth/organisationupdate', async (organisationData, thunkAPI) => {
 try {
   return await organisationauthService.organisationupdate(organisationData, organisation.token);
 } catch (error) {
   const message =
     (error.response && error.response.data && error.response.data.message) ||
     error.message ||
     error.toString();

   return thunkAPI.rejectWithValue(message);
 }
})

// Logout Organisation
export const organisationLogout = createAsyncThunk('organisationauth/organisationlogout', async () => {
  await organisationauthService.organisationlogout();
 })

export const organisationauthSlice = createSlice({
  name: "organisationauth",
  initialState,
  reducers: {
    organisationreset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(organisationRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(organisationRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.organisation = null;
      })
      .addCase(organisationRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.organisation = null;
      })
      .addCase(organisationLogout.fulfilled, (state) => {
        state.organisation = null;
      })
      .addCase(organisationLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(organisationLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.organisation = action.payload;
      })
      .addCase(organisationLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.organisation = null;
      })
  },
});

export const { organisationreset } = organisationauthSlice.actions;

export default organisationauthSlice.reducer;