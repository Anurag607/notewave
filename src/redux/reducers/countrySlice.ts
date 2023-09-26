import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "filter",
  initialState: {
    country: "",
  },
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    clearCountry: (state) => {
      state.country = "";
    },
  },
});

export const { setCountry, clearCountry } = countrySlice.actions;
export default countrySlice.reducer;
