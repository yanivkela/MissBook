const { useState, useEffect } = React

import { BookList } from "../cmps/book-list.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"

import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"

export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        bookService.query(filterBy).then(books => {
            setBooks(books)
            setIsLoading(false)
        })
    },[filterBy])


    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            showSuccessMsg('Book deleted successfully')
        })
    }

    return <section>
        <BookFilter setFilterBy={setFilterBy} />
        {!isLoading && < BookList books={books} onRemoveBook={onRemoveBook} />}
        {isLoading && <div>Loading...</div>}
        {!books.length && <div>No items to show.</div>}
    </section>
}