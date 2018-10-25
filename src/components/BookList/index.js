import React, { PureComponent } from 'react';
import mockData from './mock-data';
import Book from './Book';

class BookList extends PureComponent {
  constructor() {
    super();
    this.state = { books: mockData.books };
  }
  render() {
    return (
      <section className="section is-white">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title">Books</h1>
              {this.state.books.map(book => (
                <Book key={book.isbn10} book={book} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BookList;
