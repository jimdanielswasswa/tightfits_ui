import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Client from "../../app/client";
// { user_session_id: 0, product: 1, quantity: 1000 }, { user_session_id: 0, product: 2, quantity: 2000 }
const initialState = {
    carts: [],
    totals: [],
    status: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'REJECTED',
    error: null
};

export const fetchCarts = createAsyncThunk('cart/fetch', async () => {
    try {
        return await Client.get('shop/carts/');
    } catch (error) {
        alert(error);
    }
});

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        cartItemAdded: (state, action) => {
            const index = state.carts.findIndex((cart) => (cart.product === action.payload.product));
            if (index >= 0) {
                state.carts.splice(index, 1);
            }
            state.carts = state.carts.concat(action.payload);
        },
        cartTotalUpdated: (state, action) => {
            debugger
            const index = state.totals.findIndex((total) => (Number(total.user_session_id) === Number(action.payload.user_session_id)));
            let newTotal = action.payload.total;
            if (index >= 0) {
                newTotal += state.totals[index].total;
                state.totals.splice(index, 1);
            }
            state.totals = state.totals.concat({ user_session_id: action.payload.user_session_id, total: newTotal });
        }
    },
    extraReducers: {
        [fetchCarts.pending]: (state) => {
            state.status = 'LOADING';
        },
        [fetchCarts.fulfilled]: (state, action) => {
            state.status = 'SUCCEEDED';
            state.carts = action.payload.results;
        },
        [fetchCarts.rejected]: (state) => {
            state.status = 'REJECTED';
        }
    }
});

export const { cartItemAdded, cartTotalUpdated } = cartSlice.actions;
export const selectCartBySessionId = (state, sessionId) => (state.carts.carts.filter((cart) => (Number(cart.user_session_id) === Number(sessionId))));
// export const selectCartTotalBySessionId = (state, sessionId) => (state.carts.totals.filter((total) => (Number(total.user_session_id) === Number(sessionId))));
export const selectCartTotalBySessionId = (state, sessionId) => {
    let total = 0;
    state.carts.carts.forEach(cart => {
        if (Number(cart.user_session_id) === Number(sessionId)) {
            total += cart.amount;
        }
    })
    return total;
};

export default cartSlice.reducer;