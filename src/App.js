import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import logo from './logo.svg';
import All from './common/task'
import NotFound from './common/notFound'
import Complete from './common/complete'
import Incomplete from './common/incomplete'
import Nav from './common/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
      <Switch>
        <Route path='/' component={All}/>
        <Route path='/complete' component={Complete}/>
        <Route path='incomplete' component={Incomplete}/>
        <Route component={NotFound} />
      </Switch>
      <Nav/>
        </p>
      </div>
    );
  }
}

export default App;
