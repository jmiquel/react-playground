import React, { useState, useEffect } from 'react'

import BookService from './services/BookService'

export default function App() {

  const [ books, setBooks ] = useState([])
  
  useEffect(async () => {
    const books = await BookService.getBooks()

    setBooks(books)
  }, [])
  
  return (
    <div>
      {
        books.map(book => {
          return (
            <div key={book.isbn}>{book.name}</div>
          )
        })
      }
    </div>
  )
}