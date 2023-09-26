import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { noteType } from "../../utlis/types";

const NoteSlice = createSlice({
  name: "Notes",
  initialState: {
    noteData: [] as noteType[],
    backupData: [] as noteType[],
    categoryData: [] as any[],
    sort_market_cap: "desc",
    sort_current_price: "asc",
  },
  reducers: {
    setNoteData: (state, action: PayloadAction<noteType[]>) => {
      state.noteData = action.payload;
      state.backupData = action.payload;
    },
    setCategoryData: (state, action: PayloadAction<any[]>) => {
      state.categoryData = action.payload;
    },
    clearNoteData: (state) => {
      state.noteData = [];
    },
    sortNoteData: (state, action: PayloadAction<noteType[]>) => {
      state.noteData = action.payload;
    },
    setSortingDirCP: (state, action: PayloadAction<string>) => {
      state.sort_current_price = action.payload;
    },
    setSortingDirMC: (state, action: PayloadAction<string>) => {
      state.sort_market_cap = action.payload;
    },
    filterNoteData: (state, action: PayloadAction<string>) => {
      let tokens = action.payload
        .toLowerCase()
        .split(" ")
        .filter(function (token: string) {
          return token.trim() !== "";
        });
      let searchTermRegex = new RegExp(tokens.join("|"), "gim");
      let filteredResults: any[] = [];
      let NoteString = "";

      if (tokens.length === 0) {
        state.noteData = state.backupData;
      } else {
        state.noteData.forEach((Note: any) => {
          NoteString += Note.name.toLowerCase() + Note.symbol.toLowerCase();
          if (NoteString.match(searchTermRegex)) {
            filteredResults.push(Note);
            NoteString = "";
          }
        });
      }
      state.noteData = filteredResults;
    },
  },
});

export const {
  setNoteData,
  setCategoryData,
  clearNoteData,
  sortNoteData,
  filterNoteData,
  setSortingDirCP,
  setSortingDirMC,
} = NoteSlice.actions;

export default NoteSlice.reducer;
