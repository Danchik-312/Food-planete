import React, {useState} from 'react';
import Button from "./Button";
import styles from '../styles/Card.module.css';
import minusImg from '../assets/icons/minus.svg';
import plusImg from '../assets/icons/plus.svg';

const Count = () => {
    const [Counter, setCounter] = useState(0);

    return (
        <div className={styles.count}>
            <button onClick={()=> Counter > 0 ? setCounter(Counter-1) : 0} className={styles.count__button}>
                <img src={minusImg} alt="minus"/>
            </button>
            <p className={styles.count__number}>{Counter}</p>
            <button onClick={()=> setCounter(Counter+1)} className={styles.count__button}>
                <img src={plusImg} alt="plus"/>
            </button>
        </div>
    )
}

const Card = (props) => {
    return (
        <div className={`${styles.card} ${props.color}`}>
            <div className={styles.card__img}>
                <img src={props.img} alt="cheeseburger" />
            </div>
            <h5 className={styles.card__title}>{props.title}</h5>
            <p className={styles.card__text}>{props.content}</p>
            <p className={styles.card__price}>{props.price} сом</p>
            <Count/>
            <Button color={props.colorBtn} content='в корзину'/>
        </div>
    );
};

export default Card;