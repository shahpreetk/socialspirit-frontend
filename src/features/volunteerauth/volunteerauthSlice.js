import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  volunteer: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register new Volunteer
export const volunteerRegister = createAsyncThunk('volunteerauth/volunteerregister', async (volunteer, thunkAPI) => {
  console.log(volunteer);
})

// Login Volunteer
export const volunteerLogin = createAsyncThunk('volunteerauth/volunteerlogin', async (volunteer, thunkAPI) => {
  console.log(volunteer);
})

export const volunteerauthSlice = createSlice({
  name: "volunteerauth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default volunteerauthSlice.reducer;