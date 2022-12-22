import React from 'react';
import main from '../assets/images/main.svg';
import Button from "./Button";

const MainBlock = () => {
    return (
        <main className="page__main-block main">
            <div className="main__container _container">
                <div className="main__content">
                    <h1 className="main__title">
                        Доставка вкусной еды до 30 минут + напиток в подарок!
                    </h1>
                    <p className="main__text">
                        Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и
                        ароматным.
                    </p>
                    <Button color="orange" content='Перейти к меню' svg='inherit'/>
                </div>
                <div className="main__images">
                    <img src={main} alt="price" className='main__images__price' />
                </div>
            </div>
        </main>
    );
};

export default MainBlock;