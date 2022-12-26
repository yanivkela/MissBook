const { useState } = React

import { bookService } from "../services/book.service.js"

export function AddReview({bookId, onAddReview}) {
    const [reviewToEdit, setReviewToEdit] = useState({fullname: '', 
rating: '', readAt: '', txt: ''})
    function handleChange({target}) {
        let {value, type, name : field} = target
        value = type === 'number' ? +value: value
        setReviewToEdit((prevReviewState) => {
            return {...prevReviewState, [field]: value}
        })
    }

    function onSubmitReview(ev) {
        ev.preventDefault()
        onAddReview(reviewToEdit)
        setReviewToEdit({fullname: '', 
        rating: '', readAt: '', txt: ''})
        
    }

    return <section className="add-review">
        <form onSubmit={onSubmitReview}>
            <div className="details">
            <label htmlFor="fullname">Full name:</label>
            <input type="text" 
            name="fullname" 
            id="fullname"
            placeholder="Full name"
            value={reviewToEdit.fullname}
            onChange={handleChange}
            />
            <label htmlFor="rating">Rating:</label>
            <select name="rating" 
            id="rating" 
            value={reviewToEdit.rating} 
            onChange={handleChange}
            >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label htmlFor="read-at">Read at:</label>
            <input type="date" 
            name="readAt" 
            id="read-at" 
            value={reviewToEdit.readAt}
            onChange={handleChange}
            />
            </div>
            <textarea type="text" 
            name="txt" 
            id="txt"
            placeholder = "Enter review"
            value={reviewToEdit.txt}
            onChange={handleChange}
            />
            <button>SUBMIT</button>
        </form>

    </section>
}