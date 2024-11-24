import './Footer.scss';

import { FaLocationDot, FaPhone, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

function Footer() {
    return (
        <div className="Footer container Outfit-Regular">
            <div className="d-flex">
                <div className="flex-left">
                    <h2>Contact Info</h2>
                    <div>
                        <span> <FaLocationDot /> </span>
                        <span> Near Govt. School, Gehlab, Palwal (121103)</span>
                    </div>
                    <div>
                        <span> <FaPhone /> </span>
                        <span> <a href="tel:+918708331920">
                            <strong>+91-870-833-1920</strong></a> </span>
                    </div>
                    <div>
                        <span> <MdMail /> </span>
                        <span>
                            <a href="mailto:viveksehrawat247@gmail.com">
                                <strong>viveksehrawat247@gmail.com</strong>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="flex-right">
                    <h2>About Us</h2>
                    <p>
                        We provide solutions to your web problems. Help you make a good online presence. Solutions to your problem is one call away!
                    </p>

                    <div className="icons">
                        <span>
                            <a href="https://www.instagram.com/altravolf/" target="_blank"><FaInstagram /></a>
                        </span>
                        <span>
                            <a href="https://wa.link/s32yyn" target="_blank"><FaWhatsapp /></a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/vivek-sehrawat/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
