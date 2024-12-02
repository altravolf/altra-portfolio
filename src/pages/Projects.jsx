import Hero from "../components/Hero/Hero";

import HeroProject from "../assets/images/hero4.jpg";
import Price from "../components/Price/Price";

function Projects() {
    return (
        <div className="Projects">
            <Hero heading={"Projects"} para={"Some of my most recent work!"} img={HeroProject} />

            <Price />
        </div>
    );
}

export default Projects;
