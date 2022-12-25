const { useState, useEffect } = React

import { BookList } from "../cmps/book-list.jsx"
import { BookDetails } from "./book-details.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"

import { bookService } from "../services/book.service.js"

export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        bookService.query(filterBy).then(setBooks)
    },[filterBy])

    function onSelectBook(bookId) {
        bookService.query().then(books => {
            const book = books.find(book => book.id === bookId)
            setSelectedBook(book)
        })
    }
    function onGoBack() {
        setSelectedBook(null)
    }

    return <section>
        <BookFilter setFilterBy={setFilterBy} />
        {!selectedBook && < BookList books={books} onSelectBook={onSelectBook} />}
        {selectedBook && <BookDetails book={selectedBook} onGoBack={onGoBack} />}
    </section>
}