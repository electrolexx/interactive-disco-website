import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';
import Reel from './routes/Reel';
import About from './routes/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work/:projectName" component={Project} />
          <Route path="/reel" component={Reel} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
