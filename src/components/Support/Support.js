import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: '',
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
        <label htmlFor="support" />
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="do you feel supported?"
          id="support"
        />
        <button onClick={this.handleNext('back')}>Back</button>
        <button onClick={this.handleNext('next')}>Next</button>
      </div>
    );
  }
}

export default connect()(Support);
