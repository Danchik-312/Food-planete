import React from 'react';
import styles from './BasketCard.module.scss'

const BasketCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__title}>
                <div className={styles.card__img}>
                    <img src={props.img} alt='image'/>
                </div>
                <p>{props.title}</p>
            </div>
            <div className={styles.card__count}>
                <input type="number" defaultValue='1' min='0' max='100'/>
            </div>
            <div className={styles.card__price}>
                <p>{props.price} сом</p>
            </div>
            <div className={styles.card__topay}>
                <p>{props.price} сом</p>
                <button className={styles.card__btn} onClick={props.delete}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z" fill="inherit"/>
                        <path d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z" fill="inherit"/>
                        <path d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z" fill="inherit"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BasketCard;