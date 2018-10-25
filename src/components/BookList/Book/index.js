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
            <div className="tags">
              {this.props.book.authors.map(author => (
                <span key={author.name} className="tag is-light is-rounded">
                  {author.name}
                </span>
              ))}
            </div>
            <p>{this.props.book.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
