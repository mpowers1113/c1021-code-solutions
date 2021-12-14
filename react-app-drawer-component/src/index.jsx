import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from './app-drawer';

const App = props => {
  return (
      <div>
        <Drawer/>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
