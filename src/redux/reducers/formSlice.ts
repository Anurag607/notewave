import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        isFormOpen: false,
    },
    reducers: {
        openForm: (state) => {
            state.isFormOpen = true;
        },
        closeForm: (state) => {
            state.isFormOpen = false;
        },
    },
});

export const { openForm, closeForm } = formSlice.actions;
export default formSlice.reducer;
