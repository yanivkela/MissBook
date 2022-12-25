

export function BookDetails({book, onGoBack}) {
    return <section className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.listPrice.amount}{book.listPrice.currencyCode}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum itaque vero suscipit, aliquam impedit voluptatibus distinctio eos quae iure in veniam odio, unde sapiente incidunt officia tempora, voluptates beatae.</p>
        <button onClick={onGoBack}>Go Back</button>
    </section>
}