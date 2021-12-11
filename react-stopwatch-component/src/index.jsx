import React from 'react';
import ReactDOM from 'react-dom';
import StopWatch from './stopwatch';

const App = props => {
  return (
            <div>
                <StopWatch/>
            </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
