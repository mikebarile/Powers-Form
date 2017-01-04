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
    this.checkValidInputs = this.checkValidInputs.bind(this);
    this.checkValidInput = this.checkValidInput.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.setErrors = this.setErrors.bind(this);
  }

  componentDidUpdate(){
    this.validate();
  }

  update(inputID) {
    return (e) => {
      e.preventDefault();
      this.setState({[inputID]: parseInt(e.target.value, 10)});
    };
  }

  validate() {
    //Validates the form and sets input error states
    let errorInputs = [];
    this.checkValidInputs();

    for (var i = 1; i < 6; i++) {
      //Iterate through each val, check for validity, and then set errors.
      let inputs = [];
      if (this.state[i] && this.checkValidInput(i) && !errorInputs.includes(i)){
        let expectations = this.setExpectations(i);

        for (var j = 1; j < 6; j++) {
          if (this.state[j] !== null && this.state[j] !== expectations[j]){
            inputs.push(j);
          }
        }
      }

      //Update errorInputs if inputs is shorter e.g. this set is 'less wrong'
      if (inputs.length > errorInputs.length){
        errorInputs = inputs.slice();
      }
    }

    this.setErrors(errorInputs);
  }

  setExpectations(i) {
    //Establishes expected input values given a valid input
    let expectations = {};
    let val = this.state[i];

    for (var j = 1; j < 6; j++) {
      expectations[i] = val * Math.pow(2, (j - i));
    }
    return expectations;
  }

  checkValidInputs() {
    for (var i = 1; i < 6; i++) {
      if (this.checkValidInput(i)) {
        this.setState({
          [`error${i}`]: false
        });
      }
      else {
        this.setState({
          [`error${i}`]: true
        });
      }
    }
  }

  checkValidInput(i) {
    let val = this.state[i];
    return !isNaN(val) && val !== undefined && val % 2 === 0;
  }

  renderInput(inputID) {
    //Renders input w/ a red outline if invalid
    if (this.state[`error${inputID}`]){
      return "input error";
    }
    else {
      return "input";
    }
  }

  setErrors(inputs){
    inputs.forEach(i => {
      this.setState({
        [`error${i}`]: true
      });
    });
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
