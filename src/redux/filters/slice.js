import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    query: "",
  },
  reducers: {
    changeFilters: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { changeFilters } = slice.actions;
export default slice.reducer;
