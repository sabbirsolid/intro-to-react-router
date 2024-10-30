import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import './Navbar.css'

const Navbar = () => {
    const navigation = useNavigation()
    return (
        <div>
            <h1>Navbar</h1>
            
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
            {navigation.state === "loading"? <h3>loading</h3>: <Outlet></Outlet>}
            
            <Footer></Footer>
        </div>
    );
};

export default Navbar;