import React, { Component } from 'react';

//MATERIAL-UI COMPONENTS
import { Button } from '@material-ui/core';

class Success extends Component {
  leaveFeedback = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div>
          <h1>Feedback Submitted!</h1>
        </div>
        <div>
          <h3>Thank you for taking the time to submit feedback!</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={this.leaveFeedback}
          >
            Leave New Feedback
          </Button>
        </div>
      </div>
    );
  }
}

export default Success;
