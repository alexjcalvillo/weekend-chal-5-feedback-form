import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from '../Restart/Restart.module.css';

class Restart extends Component {
  handleRestart = (event) => {
    console.log('this button works');
    this.props.dispatch({
      type: 'CLEAR_REDUCER',
    });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <button className={styles.btn} onClick={this.handleRestart}>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            width="26px"
            height="26px"
          >
            <path d="M 10 0 L 0 2 L 3.03125 5.03125 C 1.273438 7.222656 0.1875 9.972656 0.1875 13 C 0.1875 20.074219 5.921875 25.8125 13 25.8125 C 20.078125 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 7.695313 22.59375 3.132813 18 1.1875 L 18 4.28125 C 21.027344 6.019531 23.0625 9.261719 23.0625 13 C 23.0625 18.5625 18.5625 23.0625 13 23.0625 C 7.4375 23.0625 2.9375 18.5625 2.9375 13 C 2.9375 10.726563 3.695313 8.652344 4.96875 6.96875 L 8 10 Z" />
          </svg>
        </button>
        <p className={styles.btntext}>Restart</p>
      </div>
    );
  }
}

export default connect()(withRouter(Restart));
