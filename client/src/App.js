import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { HomeContainer, GamePage, NavBar, SearchContainer } from './containers'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/game/:id' exact component={GamePage} />
          <Route path='/search' exact component={SearchContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
