import React from 'react';
import MainBlock from "../../components/mainBlock/MainBlock";
import NewBlock from "../../components/newBlock/NewBlock";
import MenuBlock from "../../components/menuBlock/MenuBlock";
import FavoriteBlock from "../../components/favoriteBlock/FavoriteBlock";
import ReviewsBlock from "../../components/reviewsBlock/ReviewsBlock";

const MainPage = () => {
    return (
        <div className='wrapper'>
            <div className="page">
                <MainBlock/>
                <NewBlock/>
                <MenuBlock/>
                <FavoriteBlock/>
                <ReviewsBlock/>
            </div>
        </div>
    );
};

export default MainPage;