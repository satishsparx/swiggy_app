import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <img className="header_logo" alt="logo" src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png" />
            <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    )
}

export default Header