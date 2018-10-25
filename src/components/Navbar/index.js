import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://spes.me">
            <img src={logo} className="App-logo" alt="logo" />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/#"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/books">
              Books
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
