import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul className="flex items-center justify-center gap-2">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="about">About us</Link></li>
                <li> <Link to="team">Team</Link></li>
                <li> <Link to="Contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;
