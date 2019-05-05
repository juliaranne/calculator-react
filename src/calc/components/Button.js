import React from 'react';
import '../styles/Button.css'; 

const isOperator = val => {
    return !isNaN(val);
};

const Button = props => (
    <span className="calc__key-wrapper">
        <button className={`${isOperator(props.children) ? 'calc__key' : 'calc__key calc__key--operator'}`} onClick={() => props.onItemClick(props.children)}>
            {props.children}
        </button>
    </span>
);

export default Button