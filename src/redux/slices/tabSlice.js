import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const tabSlice = createSlice({
    name: 'tab',
    initialState: 'Your',
    reducers: {
        your: () => 'Your',
        all: () => 'All',
        blocked: () => 'Blocked'
    }
});

export const getCurrentTabSelector = createSelector(
    (state) => state.tab,
    (state) => state
);

export const { your, all, blocked } = tabSlice.actions;

export default tabSlice.reducer;