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
        <h1>Welcome to the Best Feedback Form on the Internet!</h1>
        <Button variant="contained" color="primary" onClick={this.getStarted}>
          Get Started
        </Button>
      </div>
    );
  }
}

export default connect()(Landing);
