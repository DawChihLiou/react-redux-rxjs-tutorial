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
      <section class="section is-white">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title">Books</h1>
              {this.state.books.map(book => (
                <Book book={book} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BookList;
