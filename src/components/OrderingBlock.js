import React from 'react';
import styles from '../pages/orderingPage/OrderingPage.module.css';

const FormProduct = (props) => {
    return (
        <div className={styles.cart}>
            <div className={styles.cart__title}>
                <div className={styles.cart__img}>
                    <img src={props.img} alt='image'/>
                </div>
                <p>{props.title}</p>
            </div>
            <div className={styles.cart__count}>
                <span>{props.count}</span>
            </div>
            <div className={styles.cart__price}>
                <p>{props.price} сом</p>
            </div>
            <div className={styles.cart__topay}>
                <p>{props.price} сом</p>
            </div>
        </div>
    );
}

const OrderingBlock = () => {
    return (
        <section className={styles.page__ordering}>
            <div className="ordering__container _container">
                <div className={styles.ordering__title}>
                    <h3>Оформление заказа</h3>
                </div>
                <div className={styles.ordering__content}>
                    <div className={styles.first__column}>
                        <div className={styles.ordering__total}>
                            <p className="total__title">промокод</p>
                            <input className={styles.total__promo} type="text" placeholder='Введите сюда промокод'/>
                            <p className={styles.total__price}>Итого:</p>
                            <div className= {styles.total__items}>
                                <p className={styles.items__item}>1 товара на сумму</p>
                                <p className={styles.items__val}>300</p>
                            </div>
                            <div className={styles.total__sell}>
                                <p className={styles.sell__text}>К оплате</p>
                                <div className="sell__price">
                                    <p className={styles.sell__big}>12312 сом</p>
                                    <p className='sell__val'>123 сом</p>
                                </div>
                            </div>
                            <button className={`${styles.total__btn} orange`}>Подтвердить заказ</button>
                            <div className={styles.total__agreement}>
                                <p>
                                    Подтверждая заказ, я принимаю условия <a href='#'>пользовательского соглашения</a>
                                </p>
                            </div>
                        </div>
                        <div className={styles.ordering__form__first}>
                            <p className={styles.form__title}>Ваши контактные данные</p>
                            <div className={styles.form__auth}>
                                <input type="text" className={styles.auth__input} placeholder='Фамилия'/>
                                <input type="text" className={styles.auth__input} placeholder='Имя'/>
                                <input type="phone" className={styles.auth__input} placeholder='Мобильный телефон: 996555555555'/>
                                <input type="email" className={styles.auth__input} placeholder='Email'/>
                            </div>
                            <p className={styles.form__title}>Ваш заказ</p>
                            <div className={styles.form__products}>
                                <div className={styles.products__title}>
                                    <div className={styles.products__col}><p>Продукт</p></div>
                                    <div className={styles.products__col}><p>Количество</p></div>
                                    <div className={styles.products__col}><p>Цена</p></div>
                                    <div className={styles.products__col}><p>К оплате</p></div>
                                </div>
                                <div className={styles.products__content}>
                                    <FormProduct title='Чизбургер' count='1' price='300'/>
                                </div>
                            </div>
                            <p className={styles.form__title}>Адрес доставки</p>
                            <div className={styles.form__auth}>
                                <div className={styles.auth__radio}>
                                    <label htmlFor='pickup' className="radio__label">
                                        <input type="radio" id='pickup'/>Самовывоз
                                    </label>
                                </div>
                                <div className={styles.auth__radio}>
                                    <label htmlFor='delivery' className="radio__label">
                                        <input type="radio" id='delivery'/>Курьерская доставка
                                    </label>
                                </div>
                                <select className={styles.auth__select} id="country">
                                    <option value="def" disabled>Выберите страну</option>
                                    <option value="kg" selected>Кыргызстан</option>
                                    <option value="kz">Казахстан</option>
                                    <option value="rus">Россия</option>
                                    <option value="arm">Армения</option>
                                </select>
                                <input type="text" className={styles.auth__input} placeholder='Введите адрес доставки'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ordering__form__second}>
                        <p className={styles.form__title}>Способ оплаты</p>
                        <div className={styles.form__price}>
                            <div className={styles.auth__column}>
                                <div className={styles.auth__payment}>
                                    <label htmlFor="">
                                        <input type="radio"/>
                                        Наличными
                                    </label>
                                </div>
                                <div className={styles.auth__payment}>
                                    <label htmlFor="">
                                        <input type="radio"/>
                                        Банковский перевод
                                    </label>
                                </div>
                                <div className={styles.auth__payment}>
                                    <label htmlFor="">
                                        <input type="radio"/>
                                        Оплата курьеру на месте
                                    </label>
                                </div>
                            </div>
                            <div className={styles.auth__payment}>
                                <label htmlFor="">
                                    <input type="radio"/>
                                    Оплата картой, электронными кошельками на сайте
                                </label>
                            </div>
                            <div className={styles.auth__payment}>
                                <label htmlFor="">
                                    <input type="radio"/>
                                    Денежный перевод
                                </label>
                            </div>
                        </div>
                        <div className="form__comment">
                            <p className={styles.form__title}>Комментраий к заказу</p>
                            <div className={styles.form__text}>
                                <textarea name="" id="" cols='60' rows="5" placeholder='Ваше сообщение'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderingBlock;