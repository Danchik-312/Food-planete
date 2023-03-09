import React, {useEffect, useState} from 'react';
import BasketCard from "../../components/basketCard/BasketCard";
import styles from './BasketPage.module.scss';
import classes from 'classnames';
import {Link} from "react-router-dom";

const BasketPage = () => {
    const deleteGoods = () => {
        console.log('delete');
    }

    const [basket, setBasket] = useState([]);

    /*const getGoods = () => {
        const object_from_localStorage = JSON.parse(localStorage.getItem('cart'));
        let arr = [];

        if (object_from_localStorage){
            const arr_localStorage = Object.values(object_from_localStorage);
            console.log(arr_localStorage);

            arr_localStorage.forEach((item) => {
                let new__arr = Object.values(item);
                arr.push(item);

                if(new__arr.length > 0){
                    item.forEach(elem => arr.push(elem))
                }
            })

            setBasket(arr);
        }
    }*/

    //useEffect(getGoods, []);

    return (
        <div className="wrapper">
            <section className={styles.basket}>
                <div className={classes(styles.basket__container, "_container")}>
                    <div className={styles.basket__header}>
                        <h3 className={styles.basket__title}>Корзина</h3>
                        <h4 className={styles.basket__subtitle}>Товары в вашей корзине</h4>
                    </div>
                    <div className={styles.basket__content}>
                        <div className={styles.basket__products}>
                            <div className={styles.products__title}>
                                <div className={styles.products__col}><p>Продукт</p></div>
                                <div className={styles.products__col}><p>Количество</p></div>
                                <div className={styles.products__col}><p>Цена</p></div>
                                <div className={styles.products__col}><p>К оплате</p></div>
                            </div>
                            <div className={styles.products__content}>
                                <BasketCard title='Чизбургер' count='1' price='300' delete={deleteGoods}/>
                                <BasketCard title='Чизбургер' count='1' price='300'/>
                                <BasketCard title='Чизбургер' count='1' price='300'/>
                            </div>
                            <div className={styles.products__price}>
                                <p className={styles.price__text}>Итого:</p>
                                <p className={styles.price}>0 сом</p>
                            </div>
                            <div className={styles.basket__btn}>
                                <Link to="/" className='menu__link'>Продолжить покупки</Link>
                                <Link to='/ordering' className={styles.basket__design}>Оформить заказ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BasketPage;