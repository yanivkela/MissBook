
export function ShowReview({reviews, onRemoveReview}) {

    if (!reviews) return <div></div>

    return <section className="show-review">
        {reviews.map(review => {
            return <article className="review" key={review.id}>
                <div className="details">
                    <h3>{review.fullname}</h3>
                    <h3>{review.rating} stars</h3>
                    <h3>Read at {review.readAt}</h3>
                    <button onClick={() => onRemoveReview(`${review.id}`)}>X</button>
                </div>
                <pre>{review.txt}</pre>
            </article>
        })}
    </section>
}