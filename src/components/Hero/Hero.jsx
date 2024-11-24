import './Hero.scss';
import { Link } from "react-router-dom";

import Hero1 from "../../assets/images/hero1.jpg";
import Hero2 from "../../assets/images/hero2.jpg";
import Hero3 from "../../assets/images/hero3.jpg";

function Hero() {

    const currPath = window.location.pathname;

    console.log(currPath);

    return (
        <div className="Hero">
            <div className="mask">
                {currPath === "/" ?
                    (<>
                        <img className="hero1" src={Hero1} alt="Hero Image" />
                        <img className="hero2" src={Hero2} alt="Hero Image" />
                    </>)
                    : null
                }

                {
                    currPath === "/projects" ?
                        (<>
                            <img src={Hero3} alt="Hero Image" />
                        </>)
                        : null
                }
            </div>
            <div className="content">
                {currPath === "/" ?
                    (<>
                        <p className="">I&apos;m a Freelancer</p>
                        <h1 className="Outfit-Bold">Web Developer</h1>

                        <Link to="/projects" className="btn">Projects</Link>
                        <Link to="/contact" className="btn btn-light">Contact</Link>
                    </>) : null}

                {
                    currPath === "/projects" ?
                        (<>
                            <h1 className="Outfit-Bold"> Projects</h1>
                            <p className="">Some of my recent works!</p>
                        </>)
                        : null
                }
            </div>
        </div>
    );
}

export default Hero;
