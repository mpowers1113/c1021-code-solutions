import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibleDescription: null };
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    const targetIndex = event.target.id;
    for (let i = 0; i < this.props.data.length; i++) {
      if (targetIndex === this.props.data[i].title) {
        this.setState({ visibleDescription: i });
      }
    }
  }

  render() {

    return (
        <div>
          {this.props.data.map((data, index) =>
          <div onClick={this.toggle} key = {index.toString()} className="column-50">
            <h1 onClick={this.toggle} id={data.title}>{data.title}</h1>
            <p className={index === this.state.visibleDescription ? '' : 'hidden'}>{data.description}</p>
          </div>
          )}
        </div>
    );

  }
}

export default Accordion;
