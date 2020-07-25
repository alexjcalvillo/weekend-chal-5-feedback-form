import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL COMPONENTS
import { Button } from '@material-ui/core';

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
        <h1>Comments Page</h1>
        <h2>Any other comments or concerns you'd like us to know about?</h2>
        <textarea
          onChange={this.handleChange}
          type="text"
          placeholder="Any other comments?"
          id="comments"
        />
        <div>
          <Button variant="contained" color="primary" onClick={this.handleNext}>
            Complete
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(Comments);
