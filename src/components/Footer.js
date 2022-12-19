import React from 'react';
import logo from '../assets/icons/logoW.svg';
import phone from "../assets/icons/phoneW.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__logo logo">
                    <img src={logo} alt="logo"/>
                    <div className="logo__content">
                        <h5 className="logo__title">FOOD PLANETE</h5>
                        <h6 className="logo_subtitle">Планета вкусной еды</h6>
                    </div>
                </div>
                <div className="footer__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item"><a href="#" className="menu__link">Главная</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">Меню</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">Доставка</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">Контакты</a></li>
                        <li className="menu__item">
                            <img src={phone} alt="phone" className="phone__img"/>
                            +996500405988
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;