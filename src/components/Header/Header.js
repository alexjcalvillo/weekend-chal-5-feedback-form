import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
  state = {
    onPage: this.props.store.pageReducer,
  };
  handleClick = (page) => (event) => {
    this.setState({
      onPage: page,
    });
    this.props.dispatch({
      type: page,
    });
  };
  render() {
    const { onPage } = this.state;
    let active = '';
    if (onPage === 'feeling') {
      active = 'active';
    }
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>

        <nav className="nav">
          <ul className="nav-links">
            <li>{this.state.onPage}</li>
            <li onClick={this.handleClick('feeling')}>
              <Link className={active} to="/feeling">
                Feeling
              </Link>
            </li>

            <li>
              <Link to="/understanding">Understanding</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};
export default connect(mapStoreToProps)(Header);
