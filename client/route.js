import React, { Component } from 'react'
import {
  Route
} from 'react-router-dom'
import AppRoot from './components'
import Home from './components/home'
import About from './components/about'

class AppRouter extends Component {
  render () {
    return (
      <div>
        <Route path="/" component={AppRoot}/>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}

export default AppRouter
