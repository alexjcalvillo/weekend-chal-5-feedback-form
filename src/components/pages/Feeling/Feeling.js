import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI COMPONENTS
import { Button, Input } from '@material-ui/core';

class Feeling extends Component {
  state = {
    feeling: this.props.feeling,
  };

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };
  handleNext = (event) => {
    if (this.state.feeling === '') {
      alert('Please enter a value.');
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
      <div className="App">
        <h1>Feeling Page</h1>
        <h2>How are you feeling today?</h2>
        <label htmlFor="feeling" />
        <Input
          onChange={this.handleChange}
          type="number"
          placeholder="how are you feeling"
          id="feeling"
          value={this.state.feeling}
        />
        <Button variant="contained" color="primary" onClick={this.handleNext}>
          Next
        </Button>
      </div>
    );
  }
}
const mapStoreToProps = (store) => {
  return {
    feeling: store.feelingReducer,
  };
};
export default connect(mapStoreToProps)(Feeling);
