import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI COMPONENTS
import { Button, Input } from '@material-ui/core';

class Support extends Component {
  state = {
    support: this.props.support,
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
        alert('Please enter a value.');
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
          <h2>How well are you being supported?</h2>
          <select
            className="select"
            value={this.state.feeling}
            onChange={this.handleChange}
          >
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    support: store.supportReducer,
  };
};
export default connect(mapStoreToProps)(Support);
