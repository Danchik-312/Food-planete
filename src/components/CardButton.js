import React from 'react';

const CardButton = (props) => {
    return (
        <button className={`btn ${props.color}`}>В корзину</button>
    );
};

export default CardButton;