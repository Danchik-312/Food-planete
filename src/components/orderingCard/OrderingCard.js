import React from 'react';
import styles from './OrderingCard.module.scss';

const OrderingCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__title}>
                <div className={styles.card__img}>
                    <img src={props.img} alt='image'/>
                </div>
                <p>{props.title}</p>
            </div>
            <div className={styles.card__count}>
                <span>{props.count}</span>
            </div>
            <div className={styles.card__price}>
                <p>{props.price} сом</p>
            </div>
            <div className={styles.card__topay}>
                <p>{props.price} сом</p>
            </div>
        </div>
    );
};

export default OrderingCard;