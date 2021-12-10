import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button';

const App = props => {
  return (
        <div>
            <HotButton/>
        </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
