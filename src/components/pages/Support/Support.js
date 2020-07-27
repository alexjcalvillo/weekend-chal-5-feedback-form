import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restart from '../../Restart/Restart';

class Support extends Component {
  state = {
    support: this.props.feedback.support,
  };

  handleChange = (event) => {
    this.setState({
      support: event.target.value,
    });
  };
  handleNext = (way) => (event) => {
    if (way === 'back') {
      this.props.history.push('/understanding');
    } else if (way === 'next') {
      if (this.state.support === '') {
        alert('Please select an option from the dropdown.');
        return;
      }
      this.props.dispatch({
        type: 'SET_SUPPORT',
        payload: this.state.support,
      });
      this.props.history.push('/comments');
    }
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>How well do you feel you are you being supported?</h2>
          <select
            className="select"
            value={this.state.feeling}
            onChange={this.handleChange}
          >
            <option value={''}>Please select an option</option>
            <option value={0}>0 - I have no support</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5 - I feel very well supported!</option>
          </select>
          <div>
            <br />
            <button className="btn" onClick={this.handleNext('back')}>
              Back
            </button>
            <button className="btn" onClick={this.handleNext('next')}>
              Next
            </button>
            <Restart />
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    feedback: store.feedbackReducer,
  };
};
export default connect(mapStoreToProps)(Support);
