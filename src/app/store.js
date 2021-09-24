import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import customersReducer from '../features/customers/customersSlice';
import imagesReducer from '../features/images/ImagesSlice';
import categoryReducer from '../features/categories/categorySlice';
import salesReducer from '../features/Sales/salesSlice';
import cartReducer from '../features/cart/cartSlice';
import wishListReducer from '../features/wishList/wishListSlice';

export default configureStore({
  reducer: {
    categories: categoryReducer,
    customers: customersReducer,
    products: productsReducer,
    sales: salesReducer,
    images: imagesReducer,
    carts: cartReducer,
    wishLists: wishListReducer
  },
});
