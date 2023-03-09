import React, {useEffect, useState} from 'react';
import arr from '../../assets/icons/arSelectDr.svg';
import styles from './Header.module.scss'
import {NavLink, Link} from "react-router-dom";
import classes from 'classnames';

const InnerItem = (props) => {
    return (
        <div className={styles.inner__item}>
            <img src={props.img} alt="image" className={styles.inner__img}/>
            <p className={styles.inner__text}>{props.title}</p>
            <button className={styles.inner__btn}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z" fill="inherit"/>
                    <path d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z" fill="inherit"/>
                    <path d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z" fill="inherit"/>
                </svg>
            </button>
        </div>
    )
}

const Header = (props) => {
    const [goods, setGoods] = useState([]);

    const getGoods = () => {
        const object_from_localStorage = JSON.parse(localStorage.getItem('cart'));
        let arr = [];

        if(object_from_localStorage){
            const arr_localStorage = Object.values(object_from_localStorage);
            arr_localStorage.forEach(item => {
                let new_arr = Object.values(item);
                arr.push(item);
            })

            setGoods(arr);
        }
    };

    useEffect(getGoods, []);

    return (
        <header className={styles.header}>
            <div className={classes(styles.header__container, '_container')}>
                <div className={classes(styles.header__logo, styles.logo)}>
                    <svg className={styles.logo__img} width="32" height="33" viewBox="0 0 32 33" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6039 11.1051L21.5566 14.6665L23.0002 13.0793C24.6126 13.4737 26.398 13.0575 27.6788 11.7829C28.5896 10.8765 29.5612 9.19083 30.0966 7.58843C30.8193 5.42499 30.6884 3.77102 29.7179 2.80535C28.7476 1.83956 27.0855 1.7092 24.9115 2.42846C23.3012 2.96121 21.6074 3.92812 20.6966 4.83453C19.4414 6.08355 18.9885 7.85089 19.3941 9.4916L17.6039 11.1051Z" fill="inherit"/>
                        <path d="M10.5164 17.4702L1.26622 25.8068C0.494835 26.4863 0.0341148 27.4633 0.00186686 28.4881C-0.0642539 30.5922 1.63445 32.3428 3.7575 32.3428C4.80068 32.3428 5.84043 31.9004 6.56763 31.083L14.7332 22.1051L10.5164 17.4702Z" fill="inherit"/>
                        <path d="M31.9985 28.1356C31.9662 27.1108 31.5056 26.1338 30.7342 25.4544C29.7913 24.6048 13.3189 9.7629 12.8779 9.36555C13.3128 7.79834 12.9138 6.04799 11.6784 4.81855C11.2595 4.40168 7.69643 0.855868 7.25927 0.420828C6.89317 0.0565014 6.29964 0.0565014 5.93354 0.420828C5.56744 0.785092 5.56744 1.3758 5.93354 1.74013L8.45244 4.24688L6.94991 5.74212L4.43095 3.23531C4.06491 2.87092 3.47138 2.87104 3.10522 3.23531C2.73911 3.59957 2.73911 4.19028 3.10522 4.55461L5.62412 7.0613L4.12159 8.55654L1.60269 6.04985C1.23665 5.68559 0.643059 5.68559 0.276957 6.04985C-0.0891451 6.41412 -0.0891451 7.00482 0.276957 7.36915C4.39339 11.4656 0.45782 7.54908 4.69605 11.7669C5.90042 12.9654 7.64274 13.4065 9.2652 12.9606C35.5276 41.8261 16.0129 20.377 25.4324 30.7301C26.1153 31.4978 27.097 31.9564 28.1269 31.9884C30.2896 32.0563 32.0661 30.2885 31.9985 28.1356V28.1356Z" fill="inherit"/>
                    </svg>
                    <div className={styles.logo__content}>
                        <h5 className={styles.logo__title}>FOOD PLANET</h5>
                        <h6 className={styles.logo_subtitle}>Планета вкусной еды</h6>
                    </div>
                </div>
                <nav className={classes(styles.header__menu, "menu")}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}><NavLink to="/" className="menu__link">Главная</NavLink></li>
                        <li className={classes(styles.menu__item, styles.menu__dropdown)}>
                            <a href="#" className={styles.menu__link}>Меню</a>
                            <img src={arr} alt="images"/>
                            <ul className={styles.dropdown__content}>
                                <li><Link to="pizza" className={classes(styles.dropdown__link, "menu__link")}>Пицца</Link></li>
                                <li><Link to="burger" className={classes(styles.dropdown__link, "menu__link")}>Бургер</Link></li>
                                <li><Link to="sushi" className={classes(styles.dropdown__link, "menu__link")}>Суши</Link></li>
                                <li><Link to="rolls" className={classes(styles.dropdown__link, "menu__link")}>Роллы</Link></li>
                                <li><Link to="salads" className={classes(styles.dropdown__link, "menu__link")}>Салаты</Link></li>
                                <li><Link to="dessert" className={classes(styles.dropdown__link, "menu__link")}>Десерты</Link></li>
                                <li><Link to="drinks" className={classes(styles.dropdown__link, "menu__link")}>Напитки</Link></li>
                            </ul>
                        </li>
                        <li className={styles.menu__item}><NavLink to="delivery" className={styles.menu__link}>Доставка</NavLink></li>
                            <li className={styles.menu__item}><NavLink to="contacts" className={styles.menu__link}>Контакты</NavLink></li>
                    </ul>
                </nav>
                <div className={styles.header__phone}>
                    <svg className={styles.phone__img} width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7162 10.5022C13.7366 10.5022 12.7747 10.349 11.8633 10.0478C11.4167 9.89542 10.8676 10.0352 10.595 10.3151L8.796 11.6732C6.70962 10.5595 5.42446 9.27475 4.32596 7.20404L5.64408 5.45188C5.98654 5.10988 6.10938 4.61029 5.96221 4.14154C5.65971 3.22529 5.50604 2.26392 5.50604 1.28392C5.50608 0.575958 4.93012 0 4.22221 0H1.28387C0.575958 0 0 0.575958 0 1.28387C0 9.39846 6.60158 16 14.7162 16C15.4241 16 16 15.424 16 14.7161V11.786C16 11.0781 15.424 10.5022 14.7162 10.5022Z" fill="inherit"/>
                    </svg>
                    <p className={styles.phone__text}>+996500405988</p>
                </div>
                <div className={classes(styles.header__basket, "basket")}>
                    <button className={styles.basket__button}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8609 3.81166C15.7363 3.65217 15.5453 3.55895 15.3429 3.55895H2.83262L2.64666 1.48729C2.61625 1.1485 2.33231 0.888916 1.99219 0.888916H0.657105C0.294195 0.888916 0 1.18311 0 1.54602C0 1.90893 0.294195 2.20313 0.657105 2.20313H1.39143L2.11168 10.2273C2.11184 10.2367 2.11137 10.246 2.1119 10.2555C2.11337 10.2808 2.11666 10.3054 2.12085 10.3297L2.1472 10.6231C2.1477 10.6286 2.14826 10.6342 2.14892 10.6396C2.22877 11.3315 2.58233 11.9309 3.09359 12.3359C2.82868 12.6742 2.67016 13.0996 2.67016 13.5616C2.67016 14.6601 3.56385 15.5538 4.66231 15.5538C5.76081 15.5538 6.6545 14.6601 6.6545 13.5616C6.6545 13.3237 6.61241 13.0954 6.53556 12.8836H10.132C10.0551 13.0954 10.0131 13.3237 10.0131 13.5616C10.0131 14.6601 10.9067 15.5538 12.0052 15.5538C13.1037 15.5538 13.9974 14.6601 13.9974 13.5616C13.9974 12.4631 13.1037 11.5694 12.0052 11.5694H4.66676C4.16761 11.5694 3.73264 11.2683 3.54489 10.8295L14.0463 10.2124C14.333 10.1955 14.5756 9.99439 14.6452 9.71577L15.9804 4.37539C16.0294 4.17913 15.9854 3.97118 15.8609 3.81166Z" fill="inherit"/>
                        </svg>
                        {props.count}
                        <div className={styles.button__inner}>
                            <p className={styles.inner__title}>Корзина</p>
                            <p className={styles.inner__count}>Товаров: {props.count}</p>
                            <div className={styles.inner__place}>
                                <InnerItem/>
                            </div>
                            <Link to="basket" className={classes(styles.inner__link, "gr")}>Корзина</Link>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;