import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Client from '../../app/client';

const initialState = {
    categories: [],
    status: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED',
    error: null
};

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
    try {
        return await Client.get(`shop/categories/?format=json`);
    } catch (error) {
        alert(error);
    }
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategories.pending]: (state, action) => {
            state.status = 'LOADING';
         },
        [fetchCategories.fulfilled]: (state, action) => {
            debugger
            state.categories = state.categories.concat(action.payload.results);
        },
        [fetchCategories.rejected]: (state, action) => {
            state.status = 'FAILED';
            state.error = action.error.message;
         }
    }
});

export const selectAllCategories = (state) => (state.categories.categories);
export const selectCategoryById = (state, id) => (state.categories.categories.find((category) => Number(category.id) === Number(id)));
export default categorySlice.reducer;