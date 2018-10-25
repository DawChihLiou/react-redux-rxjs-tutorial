import React, { Component } from 'react';
import './styles.css';

import Navbar from '../Navbar';
import Home from '../Home';
import BookList from '../BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <BookList />
      </div>
    );
  }
}

export default App;
