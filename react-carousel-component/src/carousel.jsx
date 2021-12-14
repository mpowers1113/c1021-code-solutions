import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.toggleRight = this.toggleRight.bind(this);
    this.toggleLeft = this.toggleLeft.bind(this);
    this.dotToggle = this.dotToggle.bind(this);
  }

  toggleLeft() {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.props.image.length - 1 });
    } else {
      const minusOne = this.state.currentIndex - 1;
      this.setState({ currentIndex: minusOne });
    }
  }

  toggleRight() {
    if (this.state.currentIndex === this.props.image.length - 1) {
      this.setState({ currentIndex: 0 });
    } else {
      const plusOne = this.state.currentIndex + 1;
      this.setState({ currentIndex: plusOne });
    }
  }

  dotToggle(event) {
    const switchIndex = Number(event.target.id);
    this.setState({ currentIndex: switchIndex });
  }

  render() {
    return (
      <div className="container">
          {this.props.image.map((image, index) =>
          <div key={index} className={this.state.currentIndex === index ? 'row card' : 'hidden'}>
            <div className="column-20 left"><i onClick={this.toggleLeft} className="fas fa-chevron-left fa-3x"></i></div>
            <div className="column-80"><img src={image} alt={'image' + index} /></div>
            <div className="column-20 right"><i onClick={this.toggleRight} className="fas fa-chevron-right fa-3x"></i></div>
          </div>)}
          <div className="row dots">
          {this.props.image.map((image, index) =>
            <i id={index} key={index}onClick={this.dotToggle} className={index === this.state.currentIndex ? 'fas fa-circle' : 'far fa-circle'}></i>
          )}</div>
      </div>
    );
  }
}

export default Carousel;
