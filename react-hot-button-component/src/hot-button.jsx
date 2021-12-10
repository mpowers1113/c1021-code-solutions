import React from 'react';

const colorChange = {
  3: 'purple',
  6: 'blue',
  9: 'red',
  12: 'orange',
  15: 'yellow',
  18: 'white'
};

let thisManyClicks = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: thisManyClicks };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    thisManyClicks++;
    this.setState({ clickCount: thisManyClicks });
    if (thisManyClicks.toString() in colorChange) {
      event.target.style.backgroundColor = colorChange[thisManyClicks.toString()];
    }
  }

  render() {
    return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
    );
  }
}

export default HotButton;
