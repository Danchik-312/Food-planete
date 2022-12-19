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
            <main className="page">
                <MainBlock/>
                <NewBlock/>
                <MenuBlock/>
                <FavoriteBlock/>
                <ReviewsBlock/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;