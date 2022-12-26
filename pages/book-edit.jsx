const { useState} = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    return <section className="book-edit"> 
        <form onSubmit={onBookSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" 
            name="title" 
            id="title" 
            value={bookToEdit.title} 
            placeholder="Enter title"
            onChange={handleChange}
            />
            <label htmlFor="subtitle">Subtitle:</label>
            <input type="text" 
            name="subtitle" 
            id="subtitle" 
            value={bookToEdit.subtitle} 
            placeholder="Enter subtitle"
            onChange={handleChange}
            />
            <label htmlFor="subtitle">Subtitle:</label>
            <input type="text" 
            name="subtitle" 
            id="subtitle" 
            value={bookToEdit.subtitle} 
            placeholder="Enter subtitle"
            onChange={handleChange}
            />
            <label htmlFor="authors">Authors:</label>
            <input type="text" 
            name="authors" 
            id="authors" 
            value={bookToEdit.authors} 
            placeholder="Enter authors seperated by comma"
            onChange={handleChangelist}
            />
            <label htmlFor="publishedDate">Published date:</label>
            <input type="number" 
            name="publishedDate" 
            id="publishedDate" 
            value={bookToEdit.publishedDate} 
            placeholder="Enter publishedDate"
            onChange={handleChange}
            />
            <label htmlFor="description">Description:</label>
            <input type="text" 
            name="description" 
            id="description" 
            value={bookToEdit.description} 
            placeholder="Enter description"
            onChange={handleChange}
            />
            <label htmlFor="pageCount">Page count:</label>
            <input type="number" 
            name="pageCount" 
            id="pageCount" 
            value={bookToEdit.pageCount} 
            placeholder="Enter pageCount"
            onChange={handleChange}
            />
             <label htmlFor="categories">Categories:</label>
            <input type="text" 
            name="categories" 
            id="categories" 
            value={bookToEdit.categories} 
            placeholder="Enter categories seperated by comma"
            onChange={handleChangelist}
            />
            <label htmlFor="thumbnail">Thumbnail:</label>
            <input type="text" 
            name="thumbnail" 
            id="thumbnail" 
            value={bookToEdit.thumbnail} 
            placeholder="Enter thumbnail url"
            onChange={handleChange}
            />
            <label htmlFor="language">language:</label>
            <input type="text" 
            name="language" 
            id="language" 
            value={bookToEdit.language} 
            placeholder="Enter language"
            onChange={handleChange}
            />
            <label htmlFor="amount">Price:</label>
            <input type="number" 
            name="amount" 
            id="amount" 
            value={bookToEdit.listPrice.amount} 
            placeholder="Enter price"
            onChange={handleChangePrice}
            />
            <label htmlFor="currencyCode">Currency code:</label>
            <input type="text" 
            name="currencyCode" 
            id="currencyCode" 
            value={bookToEdit.listPrice.currencyCode} 
            placeholder="Enter currency code"
            onChange={handleChangePrice}
            />
            <label htmlFor="isOnSale">Is on sale?</label>
            <input type="checkbox"
            id="isOnSale"
            name="isOnSale"
            value={bookToEdit.listPrice.isOnSale}
            onChange={handleChangeIsOnSale}
            />
        </form>
    </section>
}