import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work/:projectName" component={Project} />
          <Route render={() => <h1>404 Error</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
