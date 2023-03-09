import React, {useEffect, useState} from 'react';
import styles from './ReviewsBlock.module.scss';
import classes from 'classnames';
import pencil from '../../assets/icons/pencil.svg';
import {urls} from "../../data/constants";


const ReviewsItem = (props) => {
    return (
        <div className={styles.reviews__item}>
            <div className={styles.reviews__item__img}>
                <img src={props.img} alt="icon"/>
            </div>
            <div className={styles.reviews__item__title}>
                <h4>{props.title}</h4>
                <div className={styles.title__img}>
                    <img src={pencil} alt="icon"/>
                </div>
            </div>
            <p className={styles.reviews__item__content}>{props.content}</p>
            <p className={styles.reviews__item__date}>{props.date}</p>
        </div>
    )
}

const ReviewsBlock = () => {
    const [review, setReview] = useState([]);

    const getReview = () => {
        fetch(urls.reviews)
            .then(response => response.json())
            .then(data => setReview(data));
    }

    useEffect(getReview, []);

    return (
        <section className={classes(styles.page__reviewsblock, styles.reviews)}>
            <div className={classes(styles.reviews__container, "_container")}>
                <h3 className={classes(styles.reviews__title, "tl")}>Отзывы</h3>
                <div className={styles.reviews__content}>
                    {
                        review.map((item) => {
                            return (
                                <ReviewsItem
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    content={item.content}
                                    date={item.date}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ReviewsBlock;