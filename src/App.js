import React from 'react';
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";
import NewBlock from "./components/NewBlock";
import MenuBlock from "./components/MenuBlock";
import FavoriteBlock from "./components/FavoriteBlock";
import ReviewsBlock from "./components/ReviewsBlock";
import BasketBlock from "./components/BasketBlock";
import Footer from "./components/Footer";

const MainPage = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <div className="page">
                <MainBlock/>
                <NewBlock/>
                <MenuBlock/>
                <FavoriteBlock/>
                <ReviewsBlock/>
            </div>
            <Footer/>
        </div>
    );
};

const BasketPage = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="page">
                <BasketBlock/>
            </div>
            <Footer/>
        </div>
    );
};

const App = () => {
    return <MainPage/>
};

export default App;