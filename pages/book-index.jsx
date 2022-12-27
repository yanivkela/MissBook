const { useState, useEffect } = React
const { Link} = ReactRouterDOM
import { BookList } from "../cmps/book-list.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"

import { bookService } from "../services/book.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import { BookAdd } from "../cmps/book-add.jsx"

export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [booksIds, setBooksIds] = useState([])

    useEffect(() => {
        bookService.query().then(books => {
            return books.map(book => book.id)
        }).then(setBooksIds)
    },[])

    useEffect(() => {
        setIsLoading(true)
        bookService.query(filterBy).then(books => {
            setBooks(books)
            setIsLoading(false)
        })
    },[filterBy])

    function onClickAdd(book) {
        if (booksIds.includes(book.id)) {
            showErrorMsg('Book already added')
            return
        }
        bookService.addGoogleBook(book).then(formatedBook => {
            setBooks(prevBooks => {
                return [...prevBooks, formatedBook]
            })
            setBooksIds(prev => [...prev,book.id])
        }).then(() => {showSuccessMsg('Book added successfully')})
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            const bookIdIdx = booksIds.indexOf(bookId)
            const updatedBooksIds = [...booksIds]
            updatedBooksIds.splice(bookIdIdx, 1)
            console.log(booksIds)
            setBooksIds(updatedBooksIds)
            console.log(booksIds)
            showSuccessMsg('Book deleted successfully')
        })
    }

    return <section>
        <BookFilter setFilterBy={setFilterBy} />
        <BookAdd onClickAdd={onClickAdd} />
        <Link to={"/book/edit"}>Add book</Link>
        {!isLoading && < BookList books={books} onRemoveBook={onRemoveBook} />}
        {isLoading && <div>Loading...</div>}
        {!books.length && <div>No items to show.</div>}
    </section>
}