import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Nav extends Component {
  render() {
    <div>
      <Link to='/'>All Tasks</Link>   
      <Link to='/completed'> Completed Tasks </Link>
      <Link to='/incompleted'> Incomplete Tasks </Link>
    </div>
  }
}