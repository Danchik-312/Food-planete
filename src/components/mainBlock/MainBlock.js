import React from 'react';
import styles from './MainBlock.module.scss';
import main from '../../assets/images/main.svg';
import Button from "../button/Button";
import classes from 'classnames';

const MainBlock = () => {
    return (
        <main className={classes(styles.page__mainblock, styles.main)}>
            <div className={classes(styles.main__container, "_container")}>
                <div className={styles.main__content}>
                    <h1 className={styles.main__title}>
                        Доставка вкусной еды до 30 минут + напиток в подарок!
                    </h1>
                    <p className={styles.main__text}>
                        Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и
                        ароматным.
                    </p>
                    <Button color="orange" content='Перейти к меню' svg='inherit'/>
                </div>
                <div className={styles.main__images}>
                    <img src={main} alt="price" className={styles.main__images__price} />
                </div>
            </div>
        </main>
    );
};

export default MainBlock;