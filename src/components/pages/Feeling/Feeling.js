import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };
  handleNext = (event) => {
    this.props.dispatch({
      type: 'SET_FEELING',
      payload: this.state.feeling,
    });
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div className="App">
        <h1>Feeling Page</h1>
        <h2>How are you feeling today?</h2>
        <label htmlFor="feeling" />
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="how are you feeling"
          id="feeling"
        />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Feeling);
