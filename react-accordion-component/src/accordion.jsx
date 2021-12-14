import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { HTML: false, CSS: false, JS: false };
    this.toggleHTML = this.toggleHTML.bind(this);
    this.toggleCSS = this.toggleCSS.bind(this);
    this.toggleJS = this.toggleJS.bind(this);
  }

  toggleHTML() {
    this.setState({ HTML: true, CSS: false, JS: false });
  }

  toggleCSS() {
    this.setState({ HTML: false, CSS: true, JS: false });
  }

  toggleJS() {
    this.setState({ HTML: false, CSS: false, JS: true });
  }

  render() {
    return (
      <div>
        <div onClick={this.toggleHTML} className="column-50">
          <h1 onClick={this.toggleHTML} >HTML</h1>
          {this.state.HTML && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.</p>}
        </div>
        <div onClick={this.toggleCSS} className="column-50" >
          <h1 onClick={this.toggleCSS} >CSS</h1>
          {this.state.CSS && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.</p>}
         </div>
          <div onClick={this.toggleJS} className="column-50">
            <h1 onClick={this.toggleJS} >JavaScript</h1>
            {this.state.JS && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum laboriosam, voluptates excepturi voluptas labore laudantium atque consequatur voluptate ut earum, harum quia quo numquam voluptatibus ad aliquam tempore itaque.</p>}
          </div>
      </div>
    );
  }
}

export default Accordion;
