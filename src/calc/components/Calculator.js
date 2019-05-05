import React, { Component } from 'react';
import '../styles/Calculator.css';
import Button from './Button';
import Display from './Display';
import Equals from './Equals';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
            subtotal: 0,
            operator: '',
            newInput: true,
            operatorUsed: false,
        };
       
    }

    runFunction(operator, newOperator) {
        if ( operator === '+' ){
            this.setState((prevState) => ({
                subtotal: prevState.subtotal += parseFloat(this.state.inputValue)
            })); 
        } else if ( operator === '-' ) {
            this.setState((prevState) => ({
                subtotal: prevState.subtotal -= parseFloat(this.state.inputValue)
            })); 
        } else if ( operator === '×' ) {
            this.setState((prevState) => ({
                subtotal: prevState.subtotal *= parseFloat(this.state.inputValue)
            })); 
        } else if ( operator === '÷' ) {
            this.setState((prevState) => ({
                subtotal: prevState.subtotal /= parseFloat(this.state.inputValue)
            })); 
        }
        this.setState((prevState) => ({
            inputValue: prevState.subtotal,
            operator: newOperator
        }));
    }

    handleButtonClick = val => {
        if ( this.state.newInput === true ){
            if ( val === '.' ) {
                val = `0${val}`;
            } 
            this.setState({
                inputValue: val,
                newInput: false
            });
        } else {
            this.setState((prevState) => ({
                inputValue: prevState.inputValue + val,
            })); 
        } 
    };

    handleOperatorClick = val => {
        if ( this.state.operatorUsed === false ){
            this.setState((prevState) => ({
                operator: val,
                operatorUsed: true,
                subtotal: prevState.subtotal += parseFloat(this.state.inputValue)
            }));
        } else {
            this.runFunction(this.state.operator, val);
        }
        this.setState({
            newInput: true
        })
    }

    handleEqualClick = () => {
        this.runFunction(this.state.operator);
    }

    handleClear = () => {
        this.setState({
            inputValue: 0,
            subtotal: 0,
            operator: '',
            newInput: true,
            operatorUsed: false,
        });
       
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
