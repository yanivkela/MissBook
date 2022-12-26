const { useNavigate} = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx"


export function BookList({books, onRemoveBook}) {
    const navigate = useNavigate()
    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div>
                    <button onClick={() => {navigate(`/book/${book.id}`)}}>Details</button>
                    <button onClick={() => {onRemoveBook(`${book.id}`)}}>Delete</button>
                </div>
            </li>)
        }
    </ul>
}