import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authenticate = createAsyncThunk(
  "auth/authenticateUser",
  async (input, _) => {
    console.log("input", input);
    fetch(
      "https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/",
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }
);

const initialState = {
  result: {},
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authenticate.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.result = state.data;
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
