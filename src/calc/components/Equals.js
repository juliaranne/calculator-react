import React from 'react';
import './Equals.css';

const Equals = props => (
    <span className="calc__key-wrapper calc__key-wrapper--equals">
        <button className="calc__key calc__key--equals" onClick={() => props.onItemClick(props.children)}>
            {props.children}
        </button>
    </span>
);

export default Equals