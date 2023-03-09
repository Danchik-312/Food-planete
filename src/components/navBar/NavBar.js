import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = (props) => {
    return (
        <nav className={styles.menu}>
            <h3 className={styles.menu__title}>{props.title}</h3>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}><a href="#" className={styles.menu__link}>Пицца</a></li>
                <li className={styles.menu__item}><a href="#" className={styles.menu__link}>Бургер</a></li>
                <li className={styles.menu__item}><a href="#" className={styles.menu__link}>Суши</a></li>
                <li className={styles.menu__item}><a href="#" className={styles.menu__link}>Роллы</a></li>
                <li className={styles.menu__item}><a href="#" className={styles.menu__link}>Салаты</a></li>
                <li className={styles.menu__item}><a href="#" className={styles.menu__link}>Десерты</a></li>
                <li className={styles.menu__item}><a href="#" className={styles.menu__link}>Напитки</a></li>
            </ul>
            <div className={styles.menu__null}/>
        </nav>
    );
};

export default NavBar;