const { useState, useEffect } = React 

import { bookService } from "../services/book.service.js"

export function BookFilter({setFilterBy}) {
    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        setFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({target}) {
        let {value, name: field, type} = target
        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => {
            return {...prevFilter, [field]: value}
        })
    }

    return <section className="book-filter">
        <h2>Filter books:</h2>
        <form>
            <label htmlFor="title">Title:</label>
            <input type="text" 
            id="title" 
            name="txt"
            placeholder="Book Title"
            value={filterByToEdit.txt}
            onChange={handleChange} />
            <label htmlFor="maxPrice">Max price:</label>
            <input type="number" 
            id="maxPrice" 
            name="maxPrice"
            placeholder="Book Title"
            value={filterByToEdit.maxPrice}
            onChange={handleChange} />

        </form>
    </section>
}