import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className="flex items-center justify-center gap-2">
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/about">About us</NavLink></li>
                <li> <NavLink to="/products">Team</NavLink></li>
                <li> <NavLink to="/Contact">Contact</NavLink></li>
                <li> <NavLink to="/learn">Learn</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
