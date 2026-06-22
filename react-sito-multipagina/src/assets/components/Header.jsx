import { Link } from "react-router"
const Header = () => {
    return (
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
            </ul>
        </header>
    )
}

export default Header