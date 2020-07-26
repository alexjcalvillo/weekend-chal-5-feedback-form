import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {
  leaveFeedback = () => {
    this.props.dispatch({
      type: 'CLEAR_REDUCER',
    });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <h1>Feedback Submitted!</h1>
          </div>
          <div>
            <h3>Thank you for taking the time to submit feedback!</h3>
            <button className="btn" onClick={this.leaveFeedback}>
              Leave New Feedback
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Success);
