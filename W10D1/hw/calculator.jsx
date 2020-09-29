import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    //your code here
    this.state = {
      result: 0,
      num1: "",
      num2: "",
    };
    
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.multiply = this.multiply.bind(this);
    this.division = this.division.bind(this);
    this.addition = this.addition.bind(this);
    this.subtract = this.subtract.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(event) {
    event.preventDefault();
    this.setState({ num1: parseInt(event.currentTarget.value) })
  }
  
  setNum2(event) {
    event.preventDefault();
    this.setState({ num2: parseInt(event.currentTarget.value) })
  }

  multiply(event) {
    event.preventDefault();
    this.setState({ result: this.state.num1 * this.state.num2 });
  }

  division(event) {
    event.preventDefault();
    this.setState({ result: this.state.num1 / this.state.num2 })
  }

  addition(event){
    event.preventDefault();
    this.setState({ result: this.state.num1 + this.state.num2})
  }

  subtract(event){
    event.preventDefault();
    this.setState({ result: this.state.num1 - this.state.num2})
  }

  clear(event) {
    event.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 })
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={this.state.num1} />
        <input onChange={this.setNum2} value={this.state.num2} />
        <br />
        <button onClick={this.addition}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.division}>/</button>
        <br />
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
