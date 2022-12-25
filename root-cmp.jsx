const { useState } = React

import { AboutUs } from './pages/about-us.jsx'
import { BookIndex } from './pages/book-index.jsx'
import {Home} from './pages/home.jsx'

export function App() {
    const [page, setPage] = useState('books')
    return <section className="app">
        <header className="app-header">
            <h1>Miss Book</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> |
                <a href="#" onClick={() => setPage('about-us')}>About Us</a> |
                <a href="#" onClick={() => setPage('books')}>Books</a>
            </nav>
        </header>
        <main>
            {page === 'home' && <Home/>}
            {page === 'about-us' && <AboutUs />}
            {page === 'books' && <BookIndex />}
        </main>
    </section>
}