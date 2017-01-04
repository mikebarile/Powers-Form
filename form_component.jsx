import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "input1": "",
      "input2": "",
      "input3": "",
      "input4": "",
      "input5": ""
    };
  }

  update(inputID) {

  }

  render() {
    return(
      <div className="app">
        <span className="header">My favorite powers of 2</span>

        <div className="form">
          <input
          onChange={this.update("input1")}
          className="input"
          type="text"/>

          <input
          onChange={this.update("input2")}
          className="input"
          type="text"/>

          <input
          onChange={this.update("input3")}
          className="input"
          type="text"/>

          <input
          onChange={this.update("input4")}
          className="input"
          type="text"/>

          <input
          onChange={this.update("input5")}
          className="input"
          type="text"/>
        </div>

      </div>
    );
  }
}

export default FormComponent;
