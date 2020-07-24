import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comments: '',
  };

  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleNext = (event) => {
    this.props.dispatch({
      type: 'SET_COMMENTS',
      payload: this.state.comments,
    });
    // this.props.history.push('/review');
  };

  render() {
    return (
      <div className="App">
        <h1>Comments Page</h1>
        <label htmlFor="comments">Comments</label>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="other comments?"
          id="comments"
        />
        <button onClick={this.handleNext}>Complete</button>
      </div>
    );
  }
}

export default connect()(Comments);
