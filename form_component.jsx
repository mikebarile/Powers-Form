import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    };

    this.update = this.update.bind(this);
    this.validate = this.validate.bind(this);
    this.setExpectations = this.setExpectations.bind(this);
    this.checkValidInputs = this.checkValidInputs.bind(this);
    this.checkValidInput = this.checkValidInput.bind(this);
    this.setErrors = this.setErrors.bind(this);
    this.val = this.val.bind(this);
  }

  componentDidUpdate() {
    this.validate();
  }

  update(inputID) {
    return (e) => {
      e.preventDefault();
      this.setState({[inputID]: e.target.value});
    };
  }

  validate() {
    //Validates the form and sets input error states
    let errorInputs = [];
    this.checkValidInputs();


    for (var i = 1; i < 6; i++) {
      //Iterate through each val, check for validity, and then set errors.
      if (this.state[i] !== "" && this.checkValidInput(i)){
        let inputs = [];
        let expectations = this.setExpectations(i);

        for (var j = 1; j < 6; j++) {
          if (this.state[j] !== "" && this.val(j) !== expectations[j]){
            inputs.push(j);
          }
        }

        //Update errorInputs if inputs is shorter e.g. this set is 'less wrong'
        if (errorInputs.length === 0 || inputs.length < errorInputs.length){
          errorInputs = inputs.slice();
        }
      }
    }

    this.setErrors(errorInputs);
  }

  setExpectations(i) {
    //Establishes expected input values given a valid input
    let expectations = {};
    let val = this.val(i);

    for (var j = 1; j < 6; j++) {
      expectations[j] = val * Math.pow(2, (j - i));
    }
    return expectations;
  }

  checkValidInputs() {
    for (var i = 1; i < 6; i++) {
      if (this.checkValidInput(i)) {
        $(`#${i}`).removeClass("error");
      }
      else {
        $(`#${i}`).addClass("error");
      }
    }
  }

  checkValidInput(i) {
    let val = this.val(i);
    return this.state[i] === "" ||
      (!isNaN(val) && val !== undefined && val % 2 === 0);
  }

  setErrors(inputs){
    for (var i = 1; i < 6; i++) {
      if (!inputs.includes(i) && this.checkValidInput(i)) {
        $(`#${i}`).removeClass("error");
      }
      else {
        $(`#${i}`).addClass("error");
      }
    }
  }

  val(i){
    //Helper function to shorten calling input value
    return parseInt(this.state[i]);
  }

  render() {
    return(
      <div className="app">
        <span className="header">My favorite powers of 2</span>

        <div className="form">
          <input
          id="1"
          onChange={this.update(1)}
          className="input"
          type="text"/>

          <input
          id="2"
          onChange={this.update(2)}
          className="input"
          type="text"/>

          <input
          id="3"
          onChange={this.update(3)}
          className="input"
          type="text"/>

          <input
          id="4"
          onChange={this.update(4)}
          className="input"
          type="text"/>

          <input
          id="5"
          onChange={this.update(5)}
          className="input"
          type="text"/>
        </div>

      </div>
    );
  }
}

export default FormComponent;
