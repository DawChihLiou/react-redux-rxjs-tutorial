import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';

import Navbar from '../Navbar';
import Home from '../Home';
import BookList from '../BookList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/books" component={BookList} />
          <Route component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
