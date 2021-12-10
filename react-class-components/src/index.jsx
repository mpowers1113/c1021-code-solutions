import React from 'react';
import ReactDOM from 'react-dom';

class CustomButtons extends React.Component {
  render() {
    return (
            <button>{this.props.text}</button>
    );
  }
}

const element = (
  <div>
    <CustomButtons text="I" />
    <CustomButtons text="know" />
    <CustomButtons text="React!" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
