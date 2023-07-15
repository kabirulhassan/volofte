
import { configureStore } from '@reduxjs/toolkit';

import tabReducer from './slices/tabSlice';
import dataReducer from './slices/dataSlice';


export const store = configureStore({
    reducer: {
        tab: tabReducer,
        data: dataReducer,
    },
    devTools: true
});