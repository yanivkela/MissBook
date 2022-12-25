
export function BookPreview({book}) {
    return <article className="book-preview">
        <h2>Title: {book.title}</h2>
        <img src={book.thumbnail}></img>
        <h3>Price: {book.listPrice.amount}{book.listPrice.currencyCode}</h3>
    </article>
}