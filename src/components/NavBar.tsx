import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-[#23272f] text-gray-100 p-4 shadow-md relative">
            <ul className="flex items-center justify-center gap-2 mt-5">
                <li className=" rounded-xl"> <NavLink className=" hover:bg-gray-700 rounded-3xl py-2 px-5 " to="/">Home</NavLink></li>
                <li className=" rounded-xl"> <NavLink className="hover:bg-gray-700  rounded-3xl py-2 px-5 " to="/about">About us</NavLink></li>
                <li className=" rounded-xl"> <NavLink className="hover:bg-gray-700  rounded-3xl py-2 px-5 " to="/products">Team</NavLink></li>
                <li className=" rounded-xl"> <NavLink className="hover:bg-gray-700  rounded-3xl py-2 px-5 " to="/learn">Learn</NavLink></li>
                <li className=" rounded-xl"> <NavLink className="hover:bg-gray-700  rounded-3xl py-2 px-5 " to="/contribute">Contribute</NavLink></li>
                <li className=" rounded-xl"> <NavLink className="hover:bg-gray-700  rounded-3xl py-2 px-5 " to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
