import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const App = props => {
  return (
      <div>
        <Accordion/>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
