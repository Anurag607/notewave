import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "filter",
  initialState: {
    category: "",
  },
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    clearCategory: (state) => {
      state.category = "";
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;
export default categorySlice.reducer;
