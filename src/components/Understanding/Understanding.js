import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: '',
  };

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  handleNext = (way) => (event) => {
    if (way === 'back') {
      this.props.history.push('/');
    } else if (way === 'next') {
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
        <label htmlFor="understanding" />
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="how's your understanding?"
          id="understanding"
        />
        <button onClick={this.handleNext('back')}>Back</button>
        <button onClick={this.handleNext('next')}>Next</button>
      </div>
    );
  }
}

export default connect()(Understanding);
