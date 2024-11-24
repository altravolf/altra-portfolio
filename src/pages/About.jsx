import Hero from "../components/Hero/Hero";

import HeroAbout from "../assets/images/hero3.jpg";

function About() {
    return (
        <div className="About">
            <Hero heading={"About Us"} para={"Solutions to your web problems."} img={HeroAbout} />
        </div>
    );
}

export default About;
