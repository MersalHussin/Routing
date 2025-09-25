
const NavBar = ({setPage}: {setPage:(page:"about" | "home" | "products" | "useEffect") => void}) => {
    return (
        <div>
            <ul className="flex items-center justify-center gap-2">
                <li> <a onClick={() => setPage("home")} href="#">Home</a></li>
                <li> <a onClick={() => setPage("about")} href="#">Aboutus</a></li>
                <li> <a onClick={() => setPage("products")} href="#">Products</a></li>
                <li> <a onClick={() => setPage("useEffect")} href="#">UseEffect</a></li>
            </ul>
        </div>
    );
}

export default NavBar;
