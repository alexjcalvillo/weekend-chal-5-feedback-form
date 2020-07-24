import React, { Component } from 'react';

class Feeling extends Component {
  handleNext = (event) => {
    this.props.history.push('/understanding');
  };
  render() {
    return (
      <div className="App">
        <h1>Feeling Page</h1>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default Feeling;
