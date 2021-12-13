import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    if (this.state.isOn === false) this.setState({ isOn: true });
    else this.setState({ isOn: false });
  }

  render() {
    return (
        <div><h3>{this.state.isOn === true ? 'On' : 'Off'}</h3>
          <div className={this.state.isOn === true ? 'switch' : 'switch switch-off'}><div onClick={this.handleSwitch} className={this.state.isOn === true ? 'switch-ball' : 'switch-ball flip'}></div></div></div>
    );
  }
}

export default ToggleSwitch;
