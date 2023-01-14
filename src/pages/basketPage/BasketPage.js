import React from 'react';
import Header from "../../components/Header";
import BasketBlock from "../../components/BasketBlock";
import Footer from "../../components/Footer";

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

export default BasketPage;