import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL COMPONENTS
import { Button, Input } from '@material-ui/core';

//CUSTOM STYLES
import '../Understanding/Understanding.css';

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
        alert('Please enter a value.');
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
        <h1>Understanding Page</h1>
        <h2>How well are you understanding today's content?</h2>
        <Input
          onChange={this.handleChange}
          type="number"
          placeholder="how's your understanding?"
          id="understanding"
          value={this.state.understanding}
        />
        <div className="btn">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleNext('back')}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleNext('next')}
          >
            Next
          </Button>
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
