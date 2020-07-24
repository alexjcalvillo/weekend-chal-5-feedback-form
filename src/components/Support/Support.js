import React, { Component } from 'react';

class Support extends Component {
  handleNext = (way) => (event) => {
    if (way === 'back') {
      this.props.history.push('/understanding');
    } else if (way === 'next') {
      this.props.history.push('/comments');
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Support Page</h1>
        <button onClick={this.handleNext('back')}>Back</button>
        <button onClick={this.handleNext('next')}>Next</button>
      </div>
    );
  }
}

export default Support;
