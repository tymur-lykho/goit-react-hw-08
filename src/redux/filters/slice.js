import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilters: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilters } = slice.actions;
export default slice.reducer;
