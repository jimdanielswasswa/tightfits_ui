import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Client from "../../app/client";

// const initialState = [
//     { id: 1, name: 'Rollex I', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 2, name: 'Rollex II', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 2, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 3, name: 'Rollex III', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 3, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 4, name: 'Rollex IV', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 4, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 5, name: 'Rollex V', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 5, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 6, name: 'Rollex VI', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 7, name: 'Rollex VII', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 8, name: 'Rollex VIII', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 9, name: 'Rollex IX', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 10, name: 'Rollex X', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 11, name: 'Rollex XI', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 12, name: 'Rollex XII', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 13, name: 'Rollex XIII', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 14, name: 'Rollex XX', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 15, name: 'Rollex XXI', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 16, name: 'Rollex XXII', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' },
//     { id: 17, name: 'Rollex XXIII', description: 'A very elegant watch that anyone stylish would buy and wear.', price: 400000, categories: [1, 2], size: 1, created_at: '2021-08-01', updated_at: '2021-08-01' }
// ];

const initialState = {
    products: [],
    status: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED',
    error: null,
    pagination: { count: 1, next: null, previous: null }
};


export const fetchProducts = createAsyncThunk("products/fetch", async ({ count, next, previous }) => {
    try {
        return await Client.get(`shop/products?count=${count}&next=${next}&previous=${previous}&format=json`);
    } catch (error) {
        alert(error);
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'LOADING';
        },
        [fetchProducts.fulfilled]: (state, action) => {
            debugger
            state.status = 'SUCCEEDED';
            state.products = state.products.concat(action.payload.results);
            state.pagination = { ...state.pagination, count: action.payload.count, previous: action.payload.previous, next: action.payload.next }
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'FAILED';
            state.error = action.error.message;
        }
    }
});

export const selectAllProducts = (state) => (state.products.products);
export const selectProductById = (state, id) => (state.products.products.find((p) => Number(p.id) === Number(id)));
export const selectPagination = (state) => (state.products.pagination);
export const selectProductsByCategory = (state, categoryId) => (state.products.products.filter((product) => product.categories.includes(Number(categoryId))));
export const selectProductsWhereNameLike = (state, searchTerm) => (state.products.products.filter((product) => product.name.toString().toLowerCase().trim()
    .includes(searchTerm.toString().toLowerCase().trim())));
export default productsSlice.reducer;