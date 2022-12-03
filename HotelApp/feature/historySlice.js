import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../app/api";

const API = getAPI({ req: `pemesanan/?id_user=${localStorage.getItem("id")}` });

const initialState = {
  history: [],
  loading: false,
};

export const fetchData = createAsyncThunk("history/fetchData", async () => {
  const res = await axios.get(API);
  return res.data.data;
});

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.history = payload;
      state.isLoading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  },
});

export default historySlice.reducer;
