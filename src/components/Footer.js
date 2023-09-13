import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center align-items-center mt-5">
            <div className="d-flex">
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="d-flex">
                <p>Conditions of Use</p>
                <p>Privacy Policy</p>
                <p>Press Room</p>
            </div>
            <div>
                <p className="gray">© 2021 MovieBox by Adriana Eka Prayudha  </p>
            </div>
        </footer>
    )
} 

export default Footer;