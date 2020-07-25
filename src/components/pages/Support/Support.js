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
        <h1>Support Page</h1>
        <h2>How well are you being supported?</h2>
        <label htmlFor="support" />
        <Input
          onChange={this.handleChange}
          type="number"
          placeholder="do you feel supported?"
          id="support"
          value={this.state.support}
        />
        <div>
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
    support: store.supportReducer,
  };
};
export default connect(mapStoreToProps)(Support);
