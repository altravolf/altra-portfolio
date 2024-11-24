import './Navbar.scss';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useContext, useEffect, useRef, useState } from "react";
import MyContext from "../../data/MyContext";

function Navbar() {

    const [isToggle, setIsToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    const heightRef = useRef(null);
    const { setIsHeight } = useContext(MyContext);

    useEffect(() => {
        if (heightRef?.current) {
            const height = heightRef.current.offsetHeight;
            setIsHeight(height)
        }
    })

    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    const onClickToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <nav className={`Navbar container ${scroll ? "scroll-bg" : null}`}
            ref={heightRef} >
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

