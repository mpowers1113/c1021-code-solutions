import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titles: [...this.props.titles], descriptions: [...this.props.descriptions], visibleDescription: null };
    this.toggle = this.toggle.bind(this);
  }

  // componentDidMount() {
  //   const titles = this.props.titles;
  //   const descriptions = this.props.descriptions;
  //   for (let i = 0; i < titles.length; i++) {
  //     this.setState({ titles: [...this.titles, titles[i]], descriptions: [...this.descriptions, descriptions[i]], isVisible: [...this.isVisible, false] });
  //   }
  // }

  toggle(event) {
    const targetIndex = event.target.id;
    for (let i = 0; i < this.state.titles.length; i++) {
      if (targetIndex === this.state.titles[i]) {
        this.setState({ visibleDescription: i });
      }
    }
  }

  render() {

    return (
        <div>
          {this.state.titles.map((title, index) =>
          <div onClick={this.toggle} key = {index.toString()} className="column-50">
            <h1 onClick={this.toggle} id={title}>{title}</h1>
            <p className={index === this.state.visibleDescription ? '' : 'hidden'}>{this.state.descriptions[index]}</p>
          </div>
          )}
        </div>
    );

  }
}

export default Accordion;
