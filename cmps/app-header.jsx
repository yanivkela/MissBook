const { NavLink } = ReactRouterDOM 

export function AppHeader() {
    return <header className="app-header full main-layout">
        <div className="header-container">
            <h1>Miss Book</h1>
            <nav className="app-nav">
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/about">About Us</NavLink> |
                <NavLink to="/book">Book</NavLink>
            </nav>
        </div>
    </header>
}