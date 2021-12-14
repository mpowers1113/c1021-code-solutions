import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const App = props => {

  return (
      <div>
        <Accordion data={[{ title: 'HTML', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.' }, { title: 'CSS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.' }, { title: 'JavaScript', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.' }]}/>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
