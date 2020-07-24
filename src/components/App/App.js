import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <hr />
        <Router>
          <Route exact path="/" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
        </Router>
      </div>
    );
  }
}

export default App;
