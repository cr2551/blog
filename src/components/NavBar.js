import {Link} from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/profile' className='link'>Profile</Link>
            <Link to='/article' className='link'>Articles</Link>
        </div>
    )
}