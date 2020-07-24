import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    return (
      <div>
        <h1>Review Page</h1>
        <ul>
          <li>{this.props.feeling}</li>
          <li>{this.props.understanding}</li>
          <li>{this.props.support}</li>
          <li>{this.props.comments}</li>
        </ul>
        <button>Submit Feedback</button>
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
