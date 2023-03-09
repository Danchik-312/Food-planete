import React from 'react';
import styles from './Button.module.scss'
import classes from 'classnames'

const Button = (props) => {
    return (
        <button className={classes(styles.btn, props.color)}>
            {props.content}
            <svg className="main__button__img" width="12" height="12" viewBox="0 0 12 12" fill="inherit"
                 xmlns="http://www.w3.org/2000/svg" style={{display: `${props.svg}`}}>
                <path d="M0 6.03947H10M10 6.03947L5.71429 1M10 6.03947L5.71429 11" stroke='inherit'
                      strokeWidth="2"/>
            </svg>
        </button>
    );
};

export default Button;