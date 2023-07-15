import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:4000/cards';

const initialState = {
    cards: [],
    filteredCards: [],
    isLoading: false,
    error: null,
    filters: {
        burner: true,
        subscription: true,
    }
};

export const fetchCards = createAsyncThunk(
    "data/getCards",
    async (tabCondition) => {
        const url = `${API_URL}?${tabCondition}`;
        const response = await fetch(url);
        const cards = await response.json();
        return cards;
    }
)

export const getcardsSelector = createSelector(
    (state) => state.data.cards,
    (state) => state
);


const dataSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        filterCards: (state, action) => {
            if (action?.payload) {
                const { type, value } = action.payload;
                state.filters[type] = value;
            }

            const { burner, subscription } = state.filters;

            if (burner && subscription) {
                state.filteredCards = state.cards;
            }

            if (burner && !subscription) {
                state.filteredCards = state.cards.filter(
                    card => card.card_type === "burner"
                );

            }

            if (!burner && subscription) {
                state.filteredCards = state.cards.filter(
                    card => !(card.card_type === "burner")
                );
            }

            if (!burner && !subscription) {
                state.filteredCards = [];
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchCards.pending, (state) => {
                    state.cards = [];
                    state.loading = true;
                })
                .addCase(fetchCards.fulfilled, (state, action) => {
                    state.cards = action.payload;
                    state.filteredCards = action.payload;
                    state.loading = false;
                    state.error = "";
        
                    dataSlice.caseReducers.filterCards(state);
                })
                .addCase(fetchCards.rejected, (state) => {
                    state.cards = [];
                    state.loading = false;
                    state.error = "Error fetching cards from API";
                });
        },
        
    }
});

export const { filterCards } = dataSlice.actions;

export default dataSlice.reducer;