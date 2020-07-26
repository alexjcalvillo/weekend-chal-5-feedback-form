import React, { Component } from 'react';
import { connect } from 'react-redux';

//CUSTOM STYLES
import '../Understanding/Understanding.css';
import Restart from '../../Restart/Restart';

class Understanding extends Component {
  state = {
    understanding: this.props.understanding,
  };

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  handleNext = (way) => (event) => {
    if (way === 'back') {
      this.props.history.push('/feeling');
    } else if (way === 'next') {
      if (this.state.understanding === '') {
        alert('Please select an option from the dropdown.');
        return;
      }
      this.props.dispatch({
        type: 'SET_UNDERSTANDING',
        payload: this.state.understanding,
      });
      this.props.history.push('/support');
    }
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>How well are you understanding today's content?</h2>
          <select
            className="select"
            value={this.state.understanding}
            onChange={this.handleChange}
          >
            <option value={''}>Please select an option</option>
            <option value={0}>0 - I understand nothing</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5 - I understand everything!</option>
          </select>
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
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    understanding: store.understandingReducer,
  };
};
export default connect(mapStoreToProps)(Understanding);
