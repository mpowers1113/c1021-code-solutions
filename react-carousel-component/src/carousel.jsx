import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      image: [{
        url: 'https://www.thefamouspeople.com/profiles/images/friedrich-nietzsche-22.jpg', key: 0
      }, { url: 'https://cdn.quotesgram.com/img/55/4/406926057-Friedrich_Nietzsche_corte.jpg', key: 1 }, { url: 'https://www.artvoice.com/wp-content/uploads/2016/06/nietzsche-e1466722083161.jpg', key: 2 }, { url: 'http://www.borromeoseminary.org/wp-content/uploads/2013/10/NIETZSCHE.jpg', key: 3 }, { url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/friedrich-nietzsche-pop-art-dan-sproul.jpg', key: 4 }, { url: 'https://fineartamerica.com/images-medium-5/friedrich-nietzsche-watercolor-portrait-fabrizio-cassetta.jpg', key: 5 }, { url: 'https://i.ebayimg.com/images/i/390795452465-0-1/s-l1000.jpg', key: 6 }]
    };
    this.toggleRight = this.toggleRight.bind(this);
    this.toggleLeft = this.toggleLeft.bind(this);
    this.dotToggle = this.dotToggle.bind(this);
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
        <div className="row dots">{this.state.image.map(img => {

          return <i key= {img.key} id={img.key} onClick={this.dotToggle} className={img.key === this.state.currentIndex ? 'fas fa-circle' : 'far fa-circle'}></i>;

        })}
        </div>
      </div>
    );
  }
}

export default Carousel;
