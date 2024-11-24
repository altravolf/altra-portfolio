import './Hero.scss';
import { Link } from "react-router-dom";

import Hero1 from "../../assets/images/hero1.jpg";
import Hero2 from "../../assets/images/hero2.jpg";

// eslint-disable-next-line react/prop-types
function Hero({ heading, para, img }) {

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
                    : (<>
                        <img src={img} alt="Hero Image" />
                    </>)
                }
            </div>
            <div className="content">
                {currPath === "/" ?
                    (<>
                        <p className="">I&apos;m a Freelancer</p>
                        <h1 className="Outfit-Bold">Web Developer</h1>

                        <Link to="/projects" className="btn">Projects</Link>
                        <Link to="/contact" className="btn btn-light">Contact</Link>
                    </>) :
                    (<>
                        <h1 className="Outfit-Bold"> {heading}</h1>
                        <p className="capitalize">{para}</p>
                    </>)}

            </div>
        </div>
    );
}

export default Hero;
