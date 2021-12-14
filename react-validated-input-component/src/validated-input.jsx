import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValid: false, value: '', error: 'A password is required' };
    this.validHandler = this.validHandler.bind(this);
  }

  validHandler(event) {
    if (event.target.value > 0 && event.target.value < 8) {
      this.setState({ error: 'Your password is too short' });
    }
    this.setState({ isValid: this.state.value.length > 8, value: event.target.value });
  }

  render() {
    return (
      <div>
      <label htmlFor="password">Password: </label>
      <input value={this.state.value} onChange={this.validHandler} type="password" id="password"/><i className = {this.state.isValid ? 'fas fa-check green' : 'fas fa-times red' }></i>
      <p className="red">{!this.state.isValid && this.state.error}</p>
      </div>
    );
  }
}

export default ValidatedInput;
