import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/work/:projectName" component={Project} />
        <Route path="/testing" component={Project} />
      </Router>
    );
  }
}

export default App;
