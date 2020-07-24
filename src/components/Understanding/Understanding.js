import React, { Component } from 'react';

class Understanding extends Component {
  handleNext = (way) => (event) => {
    if (way === 'back') {
      this.props.history.push('/');
    } else if (way === 'next') {
      this.props.history.push('/support');
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Understanding Page</h1>
        <button onClick={this.handleNext('back')}>Back</button>
        <button onClick={this.handleNext('next')}>Next</button>
      </div>
    );
  }
}

export default Understanding;
