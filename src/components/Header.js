import { Link } from 'react-router-dom'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <img className="w-32" alt="logo" src={LOGO_URL} />
            <ul className="flex p-4 m-4">
                <li className='px-4'><Link to="/">Home</Link></li>
                <li className='px-4'><Link to="/about">About</Link></li>
                <li className='px-4'><Link to="/contact">Contact</Link></li>
                <li className='px-4'><Link to="/orders">Orders</Link></li>
                <li className='px-4'><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    )
}

export default Header