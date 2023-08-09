export default function header() {
    return(
        <header className="header">
            <a href="/" className="logo">Color Flipper</a>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><a href="/simple">Simple</a></li>
                    <li><a href="/hex">Hex</a></li>
                </ul>
            </nav>
        </header>
    )
}