import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css'

import { Container } from 'semantic-ui-react'
// components
import TopMenu from './components/TopMenu'
import LeftMenu from './components/LeftMenu'

import statusPage from './components/statusPage'
import chooserPage from './components/chooserPage'
import comparePage from './components/comparePage'
import wishListPage from './components/wishListPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <TopMenu />
          <LeftMenu />

          <Container fluid style={{paddingLeft: '70px', marginTop: '5em'}}>
            <Route exact path="/" component={statusPage}/>
            <Route exact path="/status" component={statusPage}/>
            <Route path="/choose" component={chooserPage}/>
            <Route path="/compare" component={comparePage}/>
            <Route path="/wishlist" component={wishListPage}/>

          </Container>
        </div>
      </Router>
    )
  }
}

export default App
