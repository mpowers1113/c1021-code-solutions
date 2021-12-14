import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      image: []
    };
    this.toggleRight = this.toggleRight.bind(this);
    this.toggleLeft = this.toggleLeft.bind(this);
    this.dotToggle = this.dotToggle.bind(this);
    this.addImage = this.addImage.bind(this);
    this.addImage();
  }

  addImage() {
    const imageArr = this.props.image;
    for (const img of imageArr) {
      if (this.state.image.includes(img) === false) {
        const newImage = { url: img, key: this.state.image.length + 1 };
        this.state.image.push(newImage);
      }
    }
    this.props.image.length = 0;
  }

  toggleLeft() {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.state.image.length - 1 });
    } else {
      const minusOne = this.state.currentIndex - 1;
      this.setState({ currentIndex: minusOne });
    }
  }

  toggleRight() {
    if (this.state.currentIndex === this.state.image.length - 1) {
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
        <div key={this.state.image[this.state.currentIndex].key} className="row card">
          <div className="column-20 left"><i onClick={this.toggleLeft} className="fas fa-chevron-left fa-3x"></i></div>
          <div className="column-80"><img src={this.state.image[this.state.currentIndex].url} alt="image" /></div>
          <div className="column-20 right"><i onClick={this.toggleRight} className="fas fa-chevron-right fa-3x"></i></div></div>
        <div className="row dots">{this.state.image.map((img, index) => {
          return <i key= {index} id={index} onClick={this.dotToggle} className={index === this.state.currentIndex ? 'fas fa-circle' : 'far fa-circle'}></i>;

        })}
        </div>
      </div>
    );
  }
}

export default Carousel;
