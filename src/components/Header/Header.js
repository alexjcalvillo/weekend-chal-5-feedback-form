import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
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
            <li>
              <Link to="/feeling">Feeling</Link>
            </li>

            <li>
              <Link className="links" to="/understanding">
                Understanding
              </Link>
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

export default Header;
