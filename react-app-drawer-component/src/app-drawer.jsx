import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super();
    this.state = { isOpened: false };
    this.toggleModalHandler = this.toggleModalHandler.bind(this);
  }

  toggleModalHandler(event) {
    event.preventDefault();
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    return (
      <>
      {!this.state.isOpened && <div>
        <i onClick = {this.toggleModalHandler}className="fas fa-bars fa-2x"></i>
      </div>}
      {this.state.isOpened && <div onClick = {this.toggleModalHandler} className={this.state.isOpened ? 'overlay' : 'hidden'}><div className="drawer">
        <h1>Menu</h1>
        <a onClick = {this.toggleModalHandler}>About</a>
        <a onClick = {this.toggleModalHandler}>Get Started</a>
        <a onClick = {this.toggleModalHandler}>Sign In</a>
      </div>
      </div>}
      </>
    );
  }
}

export default Drawer;
