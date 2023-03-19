import logo from '../../images/logo.png';
import './navbar.css'

const Navbar = () => {
    return (<>
        <nav>
            <img id='logo' src={logo} alt='logo' />
            <a className='navbar-links' href='/team'>Meet the Team</a>
            <a className='navbar-links' href='/services'>Our Services</a>
            <a className='navbar-links' href='/contact'>Contact</a>
        </nav>
    </>);
}

export default Navbar;