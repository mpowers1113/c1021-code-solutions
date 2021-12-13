import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = props => {
  return (
        <button>Click Me!</button>
  );
};

const element = <CustomButton/>;

ReactDOM.render(element, document.getElementById('root'));
