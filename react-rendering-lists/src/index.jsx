import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
            <div>
                <ul>
                    {pokedex.map(poke => {
                      return <li key={poke.number}>{poke.name}</li>;
                    })}
                </ul>
            </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
