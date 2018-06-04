import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { HomeContainer } from './containers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
