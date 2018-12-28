import React, { Component } from 'react';
import './Calculator.css';
import Button from './components/Button';
import Display from './components/Display';
import Equals from './components/Equals';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
        };
        this.subtotal = 0;
        this.operator = '';
        this.newInput = true;
        this.operatorUsed = false;
    }

    runFunction(operator, newOperator) {
        if ( operator === '+' ){
            this.subtotal += parseFloat(this.state.inputValue); 
        } else if ( operator === '-' ) {
            this.subtotal -= parseFloat(this.state.inputValue);
        } else if ( operator === '×' ) {
            this.subtotal *= parseFloat(this.state.inputValue);
        } else if ( operator === '÷' ) {
            this.subtotal /= parseFloat(this.state.inputValue);
        }
        this.setState({
            inputValue: this.subtotal,
        });
        this.operator = newOperator;
    }

    handleButtonClick = val => {
        if ( this.newInput === true ){
            if ( val === '.' ) {
                val = `0${val}`;
            } 
            this.setState({
                inputValue: val,
            });
            this.newInput = false;
        } else {
            this.setState({
                inputValue: this.state.inputValue + val,
            }); 
        } 
    };

    handleOperatorClick = val => {
        if ( this.operatorUsed === false ){
            this.operator = val;
            this.operatorUsed = true;
            this.subtotal += parseFloat(this.state.inputValue);
        } else {
            this.runFunction(this.operator, val);
        }
        this.newInput = true;
    }

    handleEqualClick = () => {
        this.runFunction(this.operator);
    }

    handleClear = () => {
        this.setState({
            inputValue: 0
        });
        this.subtotal = 0;
        this.operator = '';
        this.newInput = true;
        this.operatorUsed = false;
    }

    render() {
        return ( 
            <div className="calc">
                <Display value={this.state.inputValue} />
                <div className="calc__buttons">
                    <div className="calc__numbers">
                        <Button onItemClick={this.handleButtonClick}>1</Button>
                        <Button onItemClick={this.handleButtonClick}>2</Button>
                        <Button onItemClick={this.handleButtonClick}>3</Button>
                        <Button onItemClick={this.handleButtonClick}>4</Button>
                        <Button onItemClick={this.handleButtonClick}>5</Button>
                        <Button onItemClick={this.handleButtonClick}>6</Button>
                        <Button onItemClick={this.handleButtonClick}>7</Button>
                        <Button onItemClick={this.handleButtonClick}>8</Button>
                        <Button onItemClick={this.handleButtonClick}>9</Button>
                        <Button onItemClick={this.handleButtonClick}>.</Button>
                        <Button onItemClick={this.handleButtonClick}>0</Button>
                        <Button onItemClick={this.handleClear}>C</Button>
                    </div>
                    <div className="calc__operators">
                        <Button onItemClick={this.handleOperatorClick}>÷</Button>
                        <Button onItemClick={this.handleOperatorClick}>×</Button>
                        <Button onItemClick={this.handleOperatorClick}>-</Button>
                        <Button onItemClick={this.handleOperatorClick}>+</Button>
                        <Equals onItemClick={this.handleEqualClick}>=</Equals>
                    </div>
                </div>   
            </div>
        );
    }
}

export default Calculator;
