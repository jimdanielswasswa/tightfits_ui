import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Client from "../../app/client"

const initialState = {
    sales: [],
    status: 'IDLE' |'IDLE'| 'LOADING' | 'SUCCEEDED' | 'FAILED',
    error: null
}

export const fetchSales = createAsyncThunk('sales/fetch', async () =>{
    try { 
        return await Client.get('shop/sales/');
    } catch(error){
        alert(error);
    }
});

const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchSales.pending] : (state) => {
            state.status = 'LOADING';
        },
        [fetchSales.fulfilled]: (state, action) => {
            state.status = 'SUCCEEDED';
            state.sales = state.sales.concat(action.payload);
        },
        [fetchSales.rejected]: (state, action) => {
            state.status = 'FAILED';
            state.status = action.error;
        }
    }
});

export const selectAllSales = (state) => (state.sales.sales);
export const selectSaleById = (state, id) => (state.sales.sales.find((sale) => Number(sale.id) === Number(id)));

export default salesSlice.reducer;