import React from "react";
import "../css/Footer.css";
import Facebook from "./images/icon-facebook.svg";
import Insta from "./images/icon-instagram.svg";
import Twitter from "./images/icon-twitter.svg";
import Pinterest from "./images/icon-pinterest.svg";

function Footer(){
    return(
        <div className="footer">
            <h3 className="company-name">sunnyside</h3>
            <div className="links">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
            </div>

            <div className="social-media">
                <ul>
                    <li> <img alt=" Facebook icon" src={Facebook}/> </li>
                    <li> <img alt="Instagram icon" src={Insta}/> </li>
                    <li> <img alt="Twitter icon" src={Twitter}/> </li>
                    <li> <img alt="Pinterest icon" src={Pinterest}/> </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer;