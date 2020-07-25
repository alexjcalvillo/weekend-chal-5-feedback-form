import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../pages/Feeling/Feeling';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Understanding from '../pages/Understanding/Understanding';
import Support from '../pages/Support/Support';
import Comments from '../pages/Comments/Comments';
import Review from '../pages/Review/Review';
import Success from '../Success/Success';

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
          <Route exact path="/" component={Landing} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/success" component={Success} />
        </Router>
      </div>
    );
  }
}

export default App;
