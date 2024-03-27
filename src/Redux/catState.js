import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatchFetch: (state) => {
      state.isLoading = true;
    },
    getCatSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCatchFetch, getCatSuccess, getCatsFailure } =
  catSlice.actions;

export default catSlice.reducer;
