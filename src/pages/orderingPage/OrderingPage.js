import React from 'react';
import Header from "../../components/Header";
import OrderingBlock from "../../components/OrderingBlock";
import Footer from "../../components/Footer";

const OrderingPage = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="page">
                <OrderingBlock/>
            </div>
            <Footer/>
        </div>
    );
};

export default OrderingPage;