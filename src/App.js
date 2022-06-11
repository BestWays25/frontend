import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/Homepage/Homepage";
import ProductsDetails from "./Pages/Products/ProductsDetails";
import SearchPage from "./Pages/Search/Search";
import Login from "./Pages/Sign-IN-UP/Login";
// const LazyLogin = lazy(() => import('./Pages/Sign-IN-UP/Login'));
import Register from "./Pages/Sign-IN-UP/Register";
import AddProduct from './Pages/Dashboard/AddProduct';
import Products from './Pages/Dashboard/Products';
import ProductsOutOfStock from './Pages/Dashboard/Stock';
import ListUsers from './Pages/Dashboard/Users';
import ProductsCategories from './Pages/Dashboard/ProductsCategories';
import ProductsOption from './Pages/Dashboard/ProductsOptions';
import DashboardPage from './Pages/Dashboard';
import ProductsByCtaegory from "./Pages/Categories/ProductsByCategories";
import AllCategories from "./Pages/Categories/AllCategories";
import CarouselUpdate from "./Pages/Dashboard/CarouselUpdate";
import ContactPage from "./Pages/Contact/ContactPage";
import Cart from "./Components/Cart/Cart";
import UpdateProduct from "./Pages/Dashboard/UpdateProducts";
import Profile from './Pages/UserProfile/Index';
function App() {
  return (
    <>
      <Routes>
        <Route path="/frontend/" element={<HomePage />} />
        <Route path="/frontend/Products" element={<SearchPage />} />
        <Route path="/frontend/login" element={<Login />} />
        <Route path="/frontend/register" element={<Register />} />
        <Route path="/frontend/products/:pid" element={<ProductsDetails />} />
        <Route path='/frontend/cart' element={<Cart />} />
        <Route path='/frontend/profile' element={<Profile />} />
        <Route path='/frontend/Dashboard' element={<DashboardPage />} />
        <Route path='/frontend/Dashboard/add/Product' element={<AddProduct />} />
        <Route path='/frontend/Dashboard/products' element={<Products />} />
        <Route path='/frontend/Dashboard/products/stock' element={<ProductsOutOfStock />} />
        <Route path='/frontend/Dashboard/Users' element={<ListUsers />} />
        <Route path='/frontend/Dashboard/products/Categories' element={<ProductsCategories />} />
        <Route path='/frontend/Dashboard/products/Options' element={<ProductsOption />} />
        <Route path='/frontend/products/category' element={<ProductsByCtaegory />} />
        <Route path='/frontend/products/categories' element={<AllCategories />} />
        <Route path='/frontend/Dashboard/products/update' element={<UpdateProduct />} />
        <Route path='/frontend/Dashboard/carousel/update' element={<CarouselUpdate />} />
        <Route path='/frontend/contact-us' element={<ContactPage />} />
        {/* <Route path="/login" element={<LazyLogin />} /> */}
        {/* <Route path="/arynass-frontend/" element={<HomePage />} />
        <Route path="/arynass-frontend/Products" element={<SearchPage />} />
        <Route path="/arynass-frontend/login" element={<Login />} />
        <Route path="/arynass-frontend/register" element={<Register />} />
        <Route path="/arynass-frontend/Products/details" element={<ProductsDetails />} />
        <Route path='/arynass-frontend/Dashboard' element={<DashboardPage />} />
        <Route path='/arynass-frontend/Dashboard/add/Product' element={<AddProduct />} />
        <Route path='/arynass-frontend/Dashboard/products' element={<Products />} />
        <Route path='/arynass-frontend/Dashboard/products/stock' element={<ProductsOutOfStock />} />
        <Route path='/arynass-frontend/Dashboard/Users' element={<ListUsers />} />
        <Route path='/arynass-frontend/Dashboard/products/Categories' element={<ProductsCategories />} />
        <Route path='/arynass-frontend/Dashboard/products/Options' element={<ProductsOption />} />
        <Route path='/arynass-frontend/products/category' element={<ProductsByCtaegory />} />
        <Route path='/arynass-frontend/products/categories' element={<AllCategories />} />
        <Route path='/arynass-frontend/Dashboard/carousel/update' element={<CarouselUpdate />} />
        <Route path='/arynass-frontend/contact-us' element={<ContactPage />} />
         */}
        
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
