import React from 'react';
import ReactDOM from 'react-dom';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ isClicked: true });
  }

  componentWillUnmount() {
    this.setState({ isClicked: false });
  }

  handleClick() {
    if (this.state.isClicked === true) this.setState({ isClicked: false });
    else this.setState({ isClicked: true });
  }

  render() {
    return (
        <div>
            <button onClick={this.handleClick}>{this.state.isClicked ? 'Ello' : 'Guvnah'}</button>
        </div>
    );
  }
}

ReactDOM.render(
  <MyButton/>,
  document.querySelector('#root')
);
