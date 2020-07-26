import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Comments.css';

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
    this.props.history.push('/review');
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Any other comments or concerns you'd like us to know about?</h2>
          <textarea
            className="comments"
            onChange={this.handleChange}
            type="text"
            placeholder="Any other comments?"
            id="comments"
          />

          <div>
            <br />
            <button className="btn" onClick={this.handleNext}>
              Complete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Comments);
