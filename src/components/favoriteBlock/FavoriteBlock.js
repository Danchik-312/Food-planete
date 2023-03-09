import React, {useEffect, useState} from 'react';
import styles from './FavoriteBlock.module.scss';
import classes from 'classnames';
import {urls} from "../../data/constants";

const FavoriteItem = (props) => {
    return (
        <div className={styles.favorite__item}>
            <div className={styles.favorite__item__img}>
                <img src={`./image/${props.img}`} alt="image"/>
            </div>
            <h4 className={styles.favorite__item__title}>{props.title}</h4>
            <p className={styles.favorite__item__content}>{props.content}</p>
        </div>
    )
}

const FavoriteBlock = () => {
    const [favorite, setFavorite] = useState([]);

    const getFavorite = () => {
        fetch(urls.favorites)
            .then(response => response.json())
            .then(data => setFavorite(data));
    }

    useEffect(getFavorite, []);

    return (
        <section className={classes(styles.page__favoriteblock, styles.favorite)}>
            <div className={classes(styles.favorite__container, "_container")}>
                <h3 className={classes(styles.favorite__title, "tl")}>Почему выбирают нас:</h3>
                <div className={styles.favorite__content}>
                    {
                        favorite.map((item) => {
                            return (
                                <FavoriteItem
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    content={item.content}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default FavoriteBlock;