import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  volunteer: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const volunteerRegister = createAsyncThunk('volunteerauth/volunteerregister', async (volunteer, thunkAPI) => {
  console.log(volunteer);
})

export const volunteerauthSlice = createSlice({
  name: "volunteerauth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default volunteerauthSlice.reducer;