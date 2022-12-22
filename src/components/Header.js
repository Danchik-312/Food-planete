import React from 'react';
import logo from './../logo.svg';
import phone from './../assets/icons/phone.svg';
import basket from './../assets/icons/basket.svg';
import arr from './../assets/icons/arSelectDr.svg';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__container _container">
                    <div className="header__logo logo">
                        <img src={logo} alt="logo" className="logo__img"/>
                            <div className="logo__content">
                                <h5 className="logo__title">FOOD PLANET</h5>
                                <h6 className="logo_subtitle">Планета вкусной еды</h6>
                            </div>
                    </div>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item"><a href="#" className="menu__link active">Главная</a></li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">Меню</a>
                                <img src={arr} alt="images"/>
                                <ul className="dropdown__content">
                                    <li><a href="#" className="dropdown__link menu__link">Пицца</a></li>
                                    <li><a href="#" className="dropdown__link menu__link">Бургер</a></li>
                                    <li><a href="#" className="dropdown__link menu__link">Суши</a></li>
                                    <li><a href="#" className="dropdown__link menu__link">Роллы</a></li>
                                    <li><a href="#" className="dropdown__link menu__link">Салаты</a></li>
                                    <li><a href="#" className="dropdown__link menu__link">Десерты</a></li>
                                    <li><a href="#" className="dropdown__link menu__link">Напитки</a></li>
                                </ul>
                            </li>
                            <li className="menu__item"><a href="#" className="menu__link">Доставка</a></li>
                            <li className="menu__item"><a href="#" className="menu__link">Контакты</a></li>
                        </ul>
                    </nav>
                    <div className="header__phone">
                        <img src={phone} alt="phone" className="phone__img"/>
                        <p className="phone__text">+996500405988</p>
                    </div>
                    <div className="header__basket basket">
                        <button className="basket__button">
                            <img src={basket} alt="basket" className="basket__img"/>
                            0
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;