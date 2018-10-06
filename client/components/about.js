import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div onClick={() => window.alert('about')}>about!</div>
    )
  }
}

export default About;
