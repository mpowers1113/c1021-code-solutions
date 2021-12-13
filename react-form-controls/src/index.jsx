import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`added ${this.state.value} to our annoying email series`);
  }

  render() {
    return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="emailInput">Email: </label>
                <input value={this.state.value} onChange={this.handleChange} type="email" id="emailInput"/>
                <input type="submit" value="submit"/>
            </form>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
