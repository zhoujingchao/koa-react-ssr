import React, { Component } from 'react'
import { StaticRouter } from 'react-router'
import AppRouter from './route'

class Client extends Component {
  render () {
    return (
      <StaticRouter basename="/client" context={this.props.context} location={this.props.url}>
        <AppRouter />
      </StaticRouter>
    )
  }
}

export default Client
