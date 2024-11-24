import Hero from "../components/Hero/Hero";
import HeroContact from "../assets/images/hero5.jpg";

function Contact() {
    return (
        <div className="Contact">
            <Hero heading={"Contact Us"} para={"Let's have a chat!"} img={HeroContact} />
        </div>
    );
}

export default Contact;
