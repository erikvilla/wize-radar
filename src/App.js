import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';

// components
import statusPage from './components/statusPage';
import chooserPage from './components/chooserPage';
import comparePage from './components/comparePage';
import wishListPage from './components/wishListPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={statusPage}/>
          <Route exact path="/status" component={statusPage}/>
          <Route path="/choose" component={chooserPage}/>
          <Route path="/compare" component={comparePage}/>
          <Route path="/wishlist" component={wishListPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
