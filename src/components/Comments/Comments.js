import React, { Component } from 'react';

class Comments extends Component {
  handleNext = (event) => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="App">
        <h1>Comments Page</h1>
        <button onClick={this.handleNext}>Complete</button>
      </div>
    );
  }
}

export default Comments;
