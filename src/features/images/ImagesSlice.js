import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Client from "../../app/client";

const initialState = {
    images: [],
    status: 'IDLE'| 'LOADING' | 'SUCCEEDED' | 'FAILED',
    error: null
}

export const fetchImages = createAsyncThunk("images/fetch", async () => {
    try {
        const response = await Client.get(`shop/images/?format=json`);
        return response;
    } catch(error) {
        alert(error);
    }
});

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers:{
        [fetchImages.pending]: (state, action) => {
            state.status = 'LOADING';
        },
        [fetchImages.fulfilled]: (state, action) => {
            state.status = 'SUCCEEDED';
            state.images = state.images.concat(action.payload);
        },
        [fetchImages.rejected]: (state, action) => {
            state.status = 'FAILED';
            state.error = action.error.message;
        }
    }
});

export const selectImagesByTag = (state, tag) => (state.images.images.filter((image) => image.tag.toString().trim().includes(tag.toString().trim())));
export const selectImagesById = (state, id) => (state.images.images.filter((image) => image.id === Number(id)));
export const selectImagesByProduct = (state, id) => (state.images.images.filter());
export default imagesSlice.reducer;