import './Navbar.scss';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    return (
        <nav className="Navbar">
            <h1 className="logo Outfit-Bold">
                <Link to="/">Altra Web</Link>
            </h1>

            <ul className="link-menu">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>

            <div className="hamburger">
                {/* <GiHamburgerMenu /> */}
                <RxHamburgerMenu />
            </div>
        </nav>
    );
}

export default Navbar;

