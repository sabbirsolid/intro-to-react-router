import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Navbar;