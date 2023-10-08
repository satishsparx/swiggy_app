import { Link } from 'react-router-dom'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
    return (
        <div className="header">
            <img className="header_logo" alt="logo" src={LOGO_URL} />
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