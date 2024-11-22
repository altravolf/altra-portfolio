import './Navbar.scss';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

function Navbar() {

    const [isToggle, setIsToggle] = useState(false);

    const onClickToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <nav className="Navbar container">
            <h1 className="logo Outfit-Bold">
                <Link to="/">Altra Web</Link>
            </h1>

            <ul className={`link-menu ${isToggle ? "active" : null}`}>
                <li onClick={onClickToggle}>
                    <Link to={"/"}>Home</Link>
                </li>
                <li onClick={onClickToggle}>
                    <Link to={"/projects"}>Projects</Link>
                </li>
                <li onClick={onClickToggle}>
                    <Link to={"/about"}>About</Link>
                </li>
                <li onClick={onClickToggle}>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>

            <div className="hamburger" onClick={onClickToggle} >
                {isToggle ? (<RxCross1 />) : (<RxHamburgerMenu />)}
            </div>
        </nav>
    );
}

export default Navbar;

