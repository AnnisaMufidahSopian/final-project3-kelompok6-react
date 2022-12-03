import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../app/api";

const API = getAPI({ req: `hotel` });

const initialState = {
  hotel: [],
  loading: false,
};

export const fetchData = createAsyncThunk("hotel/fetchData", async () => {
  const res = await axios.get(API);
  return res.data.data;
});

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.hotel = payload;
      state.isLoading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  },
});

export default hotelSlice.reducer;
