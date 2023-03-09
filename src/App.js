import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import BasketPage from "./pages/basketPage/BasketPage";
import OrderingPage from "./pages/orderingPage/OrderingPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AdminCatalogProduct from "./pages/admin/adminCatalogProduct/AdminCatalogProduct";
import AdminAddProduct from "./pages/admin/adminAddProduct/AdminAddProduct";
import AdminProductsPage from "./pages/admin/adminProductsPage/AdminProductsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/admin/addProduct' element={<AdminAddProduct/>}/>
                <Route path='/admin/catalog' element={<AdminCatalogProduct/>}/>
                <Route path='/admin/catalog/:product' element={<AdminProductsPage/>}/>
                <Route path='/basket' element={<BasketPage/>} />
                <Route path='/ordering' element={<OrderingPage/>} />
                <Route path='*' element={<NotFoundPage/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
};

export default App;