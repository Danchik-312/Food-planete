import React, {useEffect, useState} from 'react';
import styles from './MenuBlock.module.scss';
import classes from 'classnames';
import NavBar from "../navBar/NavBar";
import Card from "../card/Card";
import Button from "../button/Button";
import {urls} from "../../data/constants";

const MenuBlock = () => {
    const [product, setProduct] = useState([]);

    const getProducts = () => {
        fetch(urls.pizza)
            .then(response => response.json())
            .then(data => setProduct(data));
    };

    useEffect(getProducts, []);

    return (
        <section className={classes(styles.page__menublock, styles.menu)}>
            <div className={classes(styles.menu__container, "_container")}>
                <NavBar title='Меню'/>
                <div className={styles.menu__content}>
                    <div className={styles.menu__sort}>
                        <p className={styles.menu__text}>Сортировка по:</p>
                        <select name="sort" id="sort" className={styles.menu__select}>
                            <option value="def" defaultValue>По умолчанию</option>
                        </select>
                    </div>
                    <div className={styles.menu__content__items}>
                        {
                            product.map((item) => {
                                return (
                                    <Card
                                        key={item.id}
                                        data={item}
                                        color='white'
                                        colorBtn='gr'
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        product.length > 8
                            ? <Button color="wh" content='Показать ещё' svg='none'/>
                            : null
                    }
                </div>
            </div>
        </section>
    );
};

export default MenuBlock;