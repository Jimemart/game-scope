import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { HomeContainer, GamePage } from './containers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/game/:id' exact component={GamePage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
