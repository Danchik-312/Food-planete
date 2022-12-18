import React from 'react';
import burger from '../assets/images/burger.svg';
import cola from '../assets/images/cola.svg';

const MainBlock = () => {
    return (
        <section className="page__main-block main">
            <div className="main__container _container">
                <div className="main__content">
                    <h1 className="main__title">
                        Доставка вкусной еды до 30 минут + напиток в подарок!
                    </h1>
                    <p className="main__content">
                        Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и
                        ароматным.
                    </p>
                    <button className='btn orange'>
                        Перейти к меню
                        <svg className="main__button__img" width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.03947H10M10 6.03947L5.71429 1M10 6.03947L5.71429 11" stroke='white'
                                  strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
                <div className="main__images">
                    <img src={burger} alt="burger" className="main__images__burger" />
                    <img src={cola} alt="coca-cola" className="main__images__cola" />
                </div>
            </div>
        </section>
    );
};

export default MainBlock;