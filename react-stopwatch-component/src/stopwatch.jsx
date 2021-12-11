import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super();
    this.state = {
      seconds: 0,
      isCounting: false,
      timer: null
    };
    this.stopWatchHandler = this.stopWatchHandler.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  stopWatchHandler() {
    if (this.state.isCounting === false) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    if (this.state.isCounting === false) {
      const mytimer = setInterval(() => {
        const updateSeconds = this.state.seconds + 1;
        return this.setState({ seconds: updateSeconds, timer: mytimer, isCounting: true });
      }, 1000);
    }
  }

  reset() {
    this.setState({ seconds: 0, isCounting: false, timer: null });
  }

  pause() {
    clearInterval(this.state.timer);
    window.clearInterval();
    this.setState({ timer: null, isCounting: false });
  }

  render() {
    return (<div>
          <div className='circle'>
              <div onClick={this.reset} className = 'number'><h1>{this.state.seconds}</h1></div>
              </div>
              <div className='play-pause'>
              <i onClick={this.stopWatchHandler} className={this.state.isCounting === true ? 'fas fa-pause fa-4x' : 'fas fa-play fa-4x'}></i></div>
          </div>
    );
  }
}

export default StopWatch;
