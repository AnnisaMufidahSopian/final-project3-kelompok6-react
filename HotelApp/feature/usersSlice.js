import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../app/api";
// nanti si id nya ngambil dari local storage get id ketika login dan token
const id = localStorage.getItem("id");

const API = getAPI({ req: `users/?id=${id}` });

const initialState = {
  user: [],
  loading: false,
};

export const fetchData = createAsyncThunk("user/fetchData", async () => {
  const res = await axios.get(API);
  return res.data.data;
});

const UsersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  },
});

export default UsersSlice.reducer;
