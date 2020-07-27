import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restart from '../../Restart/Restart';
class Feeling extends Component {
  state = {
    feeling: this.props.feedback.feeling,
  };

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };
  handleNext = (event) => {
    if (this.state.feeling === '') {
      alert('Please select an option from the dropdown.');
      return;
    }
    this.props.dispatch({
      type: 'SET_FEELING',
      payload: this.state.feeling,
    });
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div className="container">
        <h2>How are you feeling today?</h2>
        <div>
          <select
            className="select"
            value={this.state.feeling}
            onChange={this.handleChange}
          >
            <option value={''}>Please select an option</option>
            <option value={0}>0 - I have no feeling</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5 - I feel everything!</option>
          </select>
        </div>
        <br />
        <div>
          <button className="btn" onClick={this.handleNext}>
            Next
          </button>
          <Restart />
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
export default connect(mapStoreToProps)(Feeling);
