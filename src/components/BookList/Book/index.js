import React, { PureComponent } from 'react';

class Book extends PureComponent {
  render() {
    return (
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{this.props.book.title}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <p class="subtitle">Jeff Atwood</p>
            <p>{this.props.book.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
