import React, { Component } from 'react';

class Success extends Component {
  leaveFeedback = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Feedback Submitted!</h1>
        <h3>Thank you for taking the time to submit feedback!</h3>
        <button onClick={this.leaveFeedback}>Leave New Feedback</button>
      </div>
    );
  }
}

export default Success;
