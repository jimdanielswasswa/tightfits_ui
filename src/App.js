import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Sales from './components/Sales/Sales';
import Footer from './components/Footer/Footer';
import ProductDetails from './features/products/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from './features/images/ImagesSlice';
import { fetchCategories } from './features/categories/categorySlice';
import { fetchProducts, selectPagination } from './features/products/productsSlice';
import { fetchSales } from './features/Sales/salesSlice';
import CategoryProducts from './features/categories/CategoryProducts';
import SearchResults from './features/Search/SeachResults';
import Categories from './features/categories/Categories';
import Cart from './features/cart/Cart';
import WishList from './features/wishList/WishList';

export const BASE_IMAGE_URL = process.env.BASE_IMAGE_URL || 'http://res.cloudinary.com/dwdonzmlv';
function App() {
  const dispatch = useDispatch();
  const imagesStatus = useSelector((state) => state.images.status);
  const categoryStatus = useSelector((state) => state.categories.status);
  const productsStatus = useSelector((state) => state.products.status);
  const pagination = useSelector(selectPagination);
  const salesStatus = useSelector((state) => state.sales.status);
  useEffect(() => {
    if (imagesStatus === 0 || imagesStatus === 'IDLE') {
      dispatch(fetchImages());
    }
  }, [dispatch, imagesStatus]);
  useEffect(() => {
    if (categoryStatus === 0 || categoryStatus === 'IDLE') {
      dispatch(fetchCategories());
    }
  }, [dispatch, categoryStatus]);
  useEffect(() => {
    if (productsStatus === 0 || productsStatus === 'IDLE') { //'IDLE'
      dispatch(fetchProducts({ count: pagination.count, next: pagination.next, previous: pagination.previous }));
    }
  }, [dispatch, productsStatus, pagination.count, pagination.next, pagination.previous]);
  useEffect(() => {
    if (salesStatus === 0 || salesStatus === 'IDLE') {
      dispatch(fetchSales());
    }
  }, [dispatch, salesStatus]);
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid mt-0">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/sales" component={Sales} />
          <Route path="/categories/:id/products" component={CategoryProducts} />
          <Route path="/search/:searchTerm" component={SearchResults} />
          <Route path="/categories" component={Categories} />
          <Route path="/carts/:sessionId" component={Cart} />
          <Route path="/wishlists/:sessionId" component={WishList} />
          {/* <Route path="/customers/(:id)" component={CustomerForm} /> */}
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
