import React, { Component } from 'react';
import './styles.css';

import Navbar from '../Navbar';
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
