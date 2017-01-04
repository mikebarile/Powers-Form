import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      "error1": false,
      "error2": false,
      "error3": false,
      "error4": false,
      "error5": false
    };

    this.update = this.update.bind(this);
    this.validate = this.validate.bind(this);
    this.setExpectations = this.setExpectations.bind(this);
    this.checkInputValidity = this.checkInputValidity.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  update(inputID) {
    return (e) => {
      e.preventDefault();
      this.setState({[inputID]: parseInt(e.target.value, 10)});
      this.validate();
    };
  }

  validate() {
    let maxErrors = 0;
    let errorInputs = [];

    for (var i = 1; i < 6; i++) {
      let errors = 0;
      let inputs = [];
      let expectations = this.setExpectations(i);

      for (var j = 1; j < 6; j++) {
        console.log('happy days!');
      }
    }
  }

  setExpectations(i) {
    let expectations = {};
    if (this.checkInputValidity(i)){

    }
    else {

    }
  }

  checkInputValidity(i) {
    let valid = true;
    let val = this.state[i];

    if (!i || i % 2 !== 0){
      valid = false;
    }

    return valid;
  }

  renderInput(inputID) {
    if (this.state[`error${inputID}`]){
      return "input-error";
    }
    else {
      return "input";
    }
  }

  render() {
    return(
      <div className="app">
        <span className="header">My favorite powers of 2</span>

        <div className="form">
          <input
          onChange={this.update(1)}
          className={this.renderInput(1)}
          type="text"/>

          <input
          onChange={this.update(2)}
          className={this.renderInput(2)}
          type="text"/>

          <input
          onChange={this.update(3)}
          className={this.renderInput(3)}
          type="text"/>

          <input
          onChange={this.update(4)}
          className={this.renderInput(4)}
          type="text"/>

          <input
          onChange={this.update(5)}
          className={this.renderInput(5)}
          type="text"/>
        </div>

      </div>
    );
  }
}

export default FormComponent;
