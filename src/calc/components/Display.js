import React from 'react';
import '../styles/Display.css';

const Display = props => (
    <input type="text" className="calc__display" readOnly placeholder="0" value={props.value} />
);

export default Display