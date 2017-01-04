import React from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './form_component';

class Root extends React.Component {
  render() {
    return(
      <div>
        <FormComponent/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
