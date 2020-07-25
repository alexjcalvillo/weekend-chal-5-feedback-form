import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//MATERIAL UI COMPONENTS
import { Button, Input } from '@material-ui/core';

//CUSTOM STYLING
import './Review.css';

class Review extends Component {
  state = {
    feeback: {
      feeling: '',
      understanding: '',
      support: '',
      comments: '',
    },
  };
  submitFeedback = () => {
    this.setState(
      {
        feedback: {
          feeling: this.props.feeling,
          understanding: this.props.understanding,
          support: this.props.support,
          comments: this.props.comments,
        },
      },
      () => {
        this.postFeedback(this.state.feedback);
      }
    );
  };

  postFeedback(data) {
    axios
      .post('/feedback', data)
      .then((response) => {
        this.props.history.push('/success');
      })
      .catch((err) => {
        console.log(`Something went wrong. ${err}`);
      });
  }
  render() {
    return (
      <div>
        <h1>Review Page</h1>
        <div className="display">
          <ul>
            <li>Feeling: {this.props.feeling}</li>
            <li>Understanding: {this.props.understanding}</li>
            <li>Support: {this.props.support}</li>
            <li>Comments: {this.props.comments}</li>
          </ul>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.submitFeedback}
        >
          Submit Feedback
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    feeling: store.feelingReducer,
    understanding: store.understandingReducer,
    support: store.supportReducer,
    comments: store.commentsReducer,
  };
};
export default connect(mapStoreToProps)(Review);
