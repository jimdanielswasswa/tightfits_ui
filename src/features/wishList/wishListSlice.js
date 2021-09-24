import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishListItems: [],
    status: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'REJECTED',
    error: null 
};

const wishListSlice = createSlice({ 
    name: 'wishLists',
    initialState,
    reducers: {
        wishListItemAdded: (state, action) => {
            const index = state.wishListItems.findIndex((item) => (item.product === action.payload.product));
            if(index >= 0){
                state.wishListItems.splice(index, 1);
            }
            state.wishListItems = state.wishListItems.concat(action.payload);
        }
    },
});

export const selectWishListItemsBySessionId = (state, sessionId) => (state.wishLists.wishListItems.filter((item) => Number(item.user_session_id) === Number(sessionId)));
export const { wishListItemAdded } = wishListSlice.actions;

export default wishListSlice.reducer;