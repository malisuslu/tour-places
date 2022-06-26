import '../stylesheets/layout/header.scss';

function Header() {
    return (
        <header className='header'>
            <a href="/aboutus">About Us</a>
            <a href="/foryou">For You</a>
            <a href="/services">Services</a>
            <a href="/blog">Blog</a>
            <a href="/vlog">Vlog</a>
            <a href="/contact">Contact</a>
        </header>
    );
    }


export default Header;