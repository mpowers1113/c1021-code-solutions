import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const FuncButton = props => {
  const [text, setText] = useState(false);
  const handleClick = () => {
    if (text) setText(false);
    else setText(true);
  };
  return (
        <div>
            <button onClick = {handleClick}>{text ? 'suhhhh' : 'duuuuude'}</button>
        </div>
  );
};

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
            <FuncButton/>
            <br></br>
            <button onClick={this.handleClick}>{this.state.isClicked ? 'Ello' : 'Guvnah'}</button>
        </div>
    );
  }
}

ReactDOM.render(
  <MyButton/>,
  document.querySelector('#root')
);
