import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const App = props => {

  return (

      <div>
          <Carousel/>
      </div>

  );

};

ReactDOM.render(<App />, document.getElementById('root'));
