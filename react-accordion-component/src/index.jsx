import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const App = props => {

  return (
      <div>
        <Accordion descriptions={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.']} titles={['HTML', 'CSS', 'JS']}/>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
