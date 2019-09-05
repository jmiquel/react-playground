import React from 'react'

import BookService from './services/BookService'

export default class App extends React.Component {

  state = {
    books: []
  }

  async componentDidMount() {
    const books = await BookService.getBooks()

    this.setState({ books })
  }

  render() {
    return (
      <div>
        {
          this.state.books.map(book => {
            return (
              <div key={book.isbn}>{book.name}</div>
            )
          })
        }
      </div>
    )
  }
}