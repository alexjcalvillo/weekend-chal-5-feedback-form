import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL COMPONENTS
import { Button } from '@material-ui/core';

class Landing extends Component {
  getStarted = () => {
    console.log('time to get started');
    this.props.history.push('/feeling');
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1>Welcome to the Best Feedback Form on the Internet!</h1>
          <br />
          <button className="btn" onClick={this.getStarted}>
            Get Started
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Landing);
