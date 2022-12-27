const { useState, useEffect} = React

import { googleBookService } from "../services/google-book.service.js"
import { utilService } from "../services/util.service.js"

export function BookAdd({onClickAdd}) {
    const [googleBooks, setGoogleBooks] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    
    useEffect(() => {
        if (searchParam) debounceDoSearch()
    
    }, [searchParam])
    
    function doSearch() {
        googleBookService.query(searchParam).then(setGoogleBooks)
    }
    
    const debounceDoSearch = utilService.debounce(() => {doSearch()},3000)
    function onSearch({target}) {
        const {value} = target
        setSearchParam(value)
    }
    return <section className="add-book">
        <input type="text"
        id="search"
        name="search"
        placeholder="Search on Google Books"
        value={searchParam}
        onChange={onSearch}
        />
        <ul>
            {searchParam && googleBooks && googleBooks.map(book => {
                return <li key={book.id}>{book.volumeInfo.title}
                <button onClick={() => onClickAdd(book)}>+</button>
                </li>
            })}
        </ul>
    </section>
}