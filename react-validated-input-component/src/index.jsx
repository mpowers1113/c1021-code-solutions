import React from 'react';
import ReactDOM from 'react-dom';
import ValidatedInput from './validated-input';

const App = props => {
  return (
            <div>
                <ValidatedInput/>
            </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
