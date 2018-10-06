import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div onClick={() => window.alert('home')}>home!</div>
    )
  }
}

export default Home;
