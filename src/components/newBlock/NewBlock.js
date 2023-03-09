import React, {useEffect, useState} from 'react';
import styles from './NewBlock.module.scss';
import classes from 'classnames';
import NavBar from "../navBar/NavBar";
import Card from "../card/Card";
import {urls} from "../../data/constants";

const NewBlock = () => {
    const [product, setProduct] = useState([]);

    const getProducts = () => {
        fetch(urls.news)
            .then(response => response.json())
            .then(data => setProduct(data));
    };

    useEffect(getProducts, []);

    return (
        <section className={classes(styles.page__newblock, styles.new)}>
            <div className={classes(styles.new__container, "_container")}>
                <NavBar title='Новинки'/>
                <div className={styles.new__content}>
                    {
                       product.map((item) => {
                           return (
                               <Card
                                    key={item.id}
                                    color='green'
                                    colorBtn='orange'
                                    data={item}
                               />
                           )
                       })
                    }
                </div>
            </div>
        </section>
    )
}

export default NewBlock;
