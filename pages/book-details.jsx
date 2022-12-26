const { useState, useEffect} = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import {bookService} from '../services/book.service.js'
import { utilService } from '../services/util.service.js'

import { LongText } from "../cmps/long-txt.jsx"
import { AddReview } from '../cmps/add-review.jsx'
import { showSuccessMsg } from "../services/event-bus.service.js"
import { ShowReview } from '../cmps/show-review.jsx'

export function BookDetails() {
    const [book, setBook] = useState(null)
    const { bookId } = useParams()
    const navigate = useNavigate()
    const [reviews, setReviews] = useState()
    
    useEffect(() => {
        loadBook()
    },[])

    function loadBook() {
        bookService.get(bookId)
            .then(book => {
                setBook(book)
                setReviews(book.reviews)
            })
            .catch(err => {console.log('Had issues with book details', err)})
    }

    function onGoBack() {
        navigate('/book')
    }
    
    function onAddReview(review) {
        review.id = utilService.makeId()
        bookService.addReview(bookId, review).then(() => {
            const updatedReviews = [review,...reviews]
            setReviews(updatedReviews)
            showSuccessMsg('Review added successfully')
        })
    }

    function onRemoveReview(reviewId) {
        bookService.removeReview(bookId, reviewId).then(() => {
            const updatedReviews = reviews.filter(review => review.id !== reviewId)
            setReviews(updatedReviews)
            showSuccessMsg('Review deleted successfully')
        })
        
    }

    function calcReading(pageCount) {
        if (pageCount > 500) return 'Searious Reading'
        else if (pageCount > 200) return 'Descent Reading'
        else if (pageCount < 100) return 'Light Reading'
        else return ''
    }
    function checkDate(publishedAt) {
        const year = new Date().getFullYear()
        if (year - publishedAt > 10) return 'Vintage'
        else if (year - publishedAt < 1) return 'New'
        else return ''
    }
    function checkPrice(price) {
        if (price > 150) return 'red'
        else if (price < 20) return 'green'
        else return ''
    }
    if (!book) return 'Loading...'
    return <section className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        <img src={book.thumbnail} />
        {book.authors.length === 1 && <h3>Author: {book.authors[0]}</h3>}
        {book.authors.length !== 1 && <h3>Authors: <ul>{book.authors.map(author => <li key={author}>{author}</li>)}</ul></h3>}
        <h4>{calcReading(book.pageCount)}</h4>
        <h4>{checkDate(book.publishedDate)}</h4>
        {book.listPrice.isOnSale && <h3 className="on-sale">On Sale!</h3>}
        <h2 className={`${checkPrice(book.listPrice.amount)}`}>{book.listPrice.amount}{book.listPrice.currencyCode}</h2>
        <LongText txt={book.description} />
        <button onClick={onGoBack}>Go Back</button>
        <AddReview bookId={bookId} onAddReview={onAddReview} />
        <ShowReview reviews={reviews} onRemoveReview={onRemoveReview} />
    </section>
}