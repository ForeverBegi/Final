import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import EditProduct from './Components/Admin/EditProduct/EditProduct';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import MyNavbar from './Components/Header/MyNavbar';
import Home from './Components/Home/Home';
import MainPage from './Components/Home/MainPage/MainPage';
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';
import ProductsContextProvider from './Contexts/ProductsContext';
import Payment from './Components/Payment/Payment';
import Cart from './Components/Cart/Cart';
import Star from './Components/Star/Star';
import Footer from './Components/Home/Footer/Footer';




//zapolnyaem posle funkcii 8 i add product.jsx
//funkciya 9
const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
            <MyNavbar/>
                <Routes>
                    <Route path='/add' element={<AddProduct/>}/> 
                    <Route path='/' element={<Home/>}/> 
                    <Route path='/edit/:id' element={<EditProduct/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/detail/:id' element={<ProductDetail/>}/> 
                    <Route path='/register' element={<Register/>}/> 
                    <Route path='/login' element={<Login/>}/> 
                    <Route path='/main' element={<MainPage/>}/> 
                    <Route path='/pay' element={<Payment/>} />
                    <Route path='/star' element={<Star/>} />
                    



                </Routes>
            <Footer/>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;
