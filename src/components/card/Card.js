import React, {useState} from 'react';
import styles from './Card.module.scss'
import classes from 'classnames'
import minusImg from '../../assets/icons/minus.svg';
import plusImg from '../../assets/icons/plus.svg';

const Count = (props) => {
    return (
        <div className={styles.count}>
            <button onClick={()=> props.count > 0 ? props.setCount(props.count-1) : null} className={styles.count__button}>
                <img src={minusImg} alt="minus"/>
            </button>
            <input type='number' className={styles.count__number} value={props.count} min='0' max='100' readOnly/>
            <button onClick={()=> props.setCount(props.count+1)} className={styles.count__button}>
                <img src={plusImg} alt="plus"/>
            </button>
        </div>
    )
}

const Card = (props) => {
    const [counter, setCounter] = useState(0);

    const getGoods = () => {
        const json = localStorage.getItem('cart');
        let goods_object = {};

        if(json){
            goods_object = JSON.parse(json);
        }
    }

    const addCart = () => {
        const object_in_localStorage = getGoods();
        const goods = {
            cart: {
                ...object_in_localStorage,
                [props.data.id]: props.data,
                count: counter
            }
        }

        localStorage.setItem('cart', JSON.stringify(goods))

    };


    return (
        <div className={classes(styles.card, props.color)}>
            <div className={styles.card__img}>
                <img src={props.data.img} alt="image" />
            </div>
            <h5 className={styles.card__title}>{props.data.title}</h5>
            <p className={styles.card__text}>{props.data.content}</p>
            <p className={styles.card__price}>{props.data.price} сом</p>
            <Count count = {counter} setCount = {setCounter}/>
            <button className={classes(styles.btn, props.colorBtn)} onClick={addCart}>В корзину</button>
        </div>
    );
};

export default Card;