const { useState, useEffect} = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const { bookId } = useParams()
    useEffect(() => {
        if (!bookId) return
        bookService.get(bookId).then(setBookToEdit)
    },[])
    function handleChange({target}) {
        let {value, type, name : field} = target
        value = type === 'number' ? +value || '' : value
        setBookToEdit(prevBookToEdit => {
            return {...prevBookToEdit, [field]:value}
        })
        console.log(bookToEdit)
    }
    function handleChangeList({target}) {
        let {value, name:field} = target
        setBookToEdit(prevBookToEdit => {
            return {...prevBookToEdit, [field]:value.split(',')}
        })
        console.log(bookToEdit)
    }
    function handleChangePrice({target}) {
        let {value, type, name : field} = target
        value = type === 'number' ? +value || '' : value
        setBookToEdit(prevBookToEdit => {
            return {...prevBookToEdit, listPrice: {...prevBookToEdit.listPrice,[field]:value}}
        })
        console.log(bookToEdit)
    }
    function handleChangeIsOnSale({target}) {
        let {checked, name:field} = target
        setBookToEdit(prevBookToEdit => {
            return {...prevBookToEdit, listPrice: {...prevBookToEdit.listPrice,[field]:checked}}
        })
    }
    function onBookSubmit(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit).then(() => {navigate('/book')})
    }
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
            <br/>
            <label htmlFor="subtitle">Subtitle:</label>
            <input type="text" 
            name="subtitle" 
            id="subtitle" 
            value={bookToEdit.subtitle} 
            placeholder="Enter subtitle"
            onChange={handleChange}
            />
            <br/>
            <label htmlFor="authors">Authors:</label>
            <input type="text" 
            name="authors" 
            id="authors" 
            value={bookToEdit.authors.join(',')}  
            placeholder="Enter authors seperated by comma"
            onChange={handleChangeList}
            />
            <br/>
            <label htmlFor="publishedDate">Published date:</label>
            <input type="number" 
            name="publishedDate" 
            id="publishedDate" 
            value={bookToEdit.publishedDate} 
            placeholder="Enter publishedDate"
            onChange={handleChange}
            />
            <br/>
            <label htmlFor="description">Description:</label>
            <input type="text" 
            name="description" 
            id="description" 
            value={bookToEdit.description} 
            placeholder="Enter description"
            onChange={handleChange}
            />
            <br/>
            <label htmlFor="pageCount">Page count:</label>
            <input type="number" 
            name="pageCount" 
            id="pageCount" 
            value={bookToEdit.pageCount} 
            placeholder="Enter pageCount"
            onChange={handleChange}
            />
            <br/>
             <label htmlFor="categories">Categories:</label>
            <input type="text" 
            name="categories" 
            id="categories" 
            value={bookToEdit.categories.join(',')} 
            placeholder="Enter categories seperated by comma"
            onChange={handleChangeList}
            />
            <br/>
            <label htmlFor="thumbnail">Thumbnail:</label>
            <input type="text" 
            name="thumbnail" 
            id="thumbnail" 
            value={bookToEdit.thumbnail} 
            placeholder="Enter thumbnail url"
            onChange={handleChange}
            />
            <br/>
            <label htmlFor="language">language:</label>
            <input type="text" 
            name="language" 
            id="language" 
            value={bookToEdit.language} 
            placeholder="Enter language"
            onChange={handleChange}
            />
            <br/>
            <label htmlFor="amount">Price:</label>
            <input type="number" 
            name="amount" 
            id="amount" 
            value={bookToEdit.listPrice.amount} 
            placeholder="Enter price"
            onChange={handleChangePrice}
            />
            <br/>
            <label htmlFor="currencyCode">Currency code:</label>
            <input type="text" 
            name="currencyCode" 
            id="currencyCode" 
            value={bookToEdit.listPrice.currencyCode} 
            placeholder="Enter currency code"
            onChange={handleChangePrice}
            />
            <br/>
            <label htmlFor="isOnSale">Is on sale?</label>
            <input type="checkbox"
            id="isOnSale"
            name="isOnSale"
            value={bookToEdit.listPrice.isOnSale}
            onChange={handleChangeIsOnSale}
            />
            <br/>
            <button>Submit</button>
        </form>
    </section>
}