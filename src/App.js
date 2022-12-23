import React from 'react';
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";
import NewBlock from "./components/NewBlock";
import MenuBlock from "./components/MenuBlock";
import FavoriteBlock from "./components/FavoriteBlock";
import ReviewsBlock from "./components/ReviewsBlock";
import Footer from "./components/Footer";

const App = () => {
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
    )
};

export default App;