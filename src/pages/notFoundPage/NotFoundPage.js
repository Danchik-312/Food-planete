import React from 'react';
import styles from './NotFoundPage.module.scss'
import classes from 'classnames';
import {Link} from "react-router-dom";
import error from '../../assets/images/error.svg';

const NotFoundPage = () => {
    return (
        <div className='wrapper'>
            <section className={classes(styles.page__error, styles.error)}>
                <div className={classes(styles.error__container, "_container")}>
                    <div className={styles.error__text}>
                        <h2 className={styles.error__text__title}>
                            Эта страница не существует</h2>
                        <div className={styles.error__message__container}>
                            <p className={styles.error__message}>Ну, технически он существует, но только для того, чтобы сообщить вам, что страница, которую вы ищете, не существует. Извини за это.</p>
                            <Link to='/' className={styles.error__button}>На главную</Link>
                        </div>
                    </div>
                    <div className={styles.error__image}>
                        <img src={error} alt="error"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFoundPage;