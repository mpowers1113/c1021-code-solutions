import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './toggle-switch';

const App = props => {
  return (
          <div>
              <ToggleSwitch/>
          </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
