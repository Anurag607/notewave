import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { noteType } from "../../utlis/types";

const NoteSlice = createSlice({
  name: "Notes",
  initialState: {
    noteData: [] as noteType[],
    backupData: [] as noteType[],
    categoryData: [] as any[],
    focusedNote: {
      id: "",
      title: "",
      subtitle: "",
      email: "",
      note: "",
      type: "",
      image: "",
      pinned: false,
      color: "#ff9b73"
    } as noteType,
  },
  reducers: {
    setNoteData: (state, action: PayloadAction<noteType[]>) => {
      state.noteData = action.payload;
    },
    setBackupData: (state, action: PayloadAction<noteType[]>) => {
      state.backupData = action.payload;
    },
    setCategoryData: (state, action: PayloadAction<any[]>) => {
      state.categoryData = action.payload;
    },
    clearNoteData: (state) => {
      state.noteData = [];
    },
    setFocusedNote: (state, action: PayloadAction<noteType>) => {
      state.focusedNote = action.payload;
    },
    clearFocusedNote: (state) => {
      state.focusedNote = {
      id: "",
      title: "",
      subtitle: "",
      email: "",
      note: "",
      type: "",
      image: "",
      pinned: false,
      color: "#ff9b73"
    } as noteType;
    },
  },
});

export const {
  setNoteData,
  setCategoryData,
  clearNoteData,
  setBackupData,
  setFocusedNote,
  clearFocusedNote,
} = NoteSlice.actions;

export default NoteSlice.reducer;
