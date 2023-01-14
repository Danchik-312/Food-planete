import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import BasketPage from "./pages/basketPage/BasketPage";
import OrderingPage from "./pages/orderingPage/OrderingPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/basket' element={<BasketPage/>} />
                <Route path='/ordering' element={<OrderingPage/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;