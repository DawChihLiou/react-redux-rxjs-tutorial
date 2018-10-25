import React, { PureComponent } from 'react';

class Book extends PureComponent {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{this.props.book.title}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p className="subtitle">Jeff Atwood</p>
            <p>{this.props.book.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
