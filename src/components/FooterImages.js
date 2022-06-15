import React from "react";
import "../css/FooterImages.css";
import MilkBottles from "./images/desktop/image-gallery-milkbottles.jpg";
import Orange from "./images/desktop/image-gallery-orange.jpg";
import Cone from "./images/desktop/image-gallery-cone.jpg";
import SugarCubes from "./images/desktop/image-gallery-sugarcubes.jpg";

function FooterImages(){
    return(
        <div className="img-gallery">
            <img src={MilkBottles} alt="Bottles of milk"/>
            <img src={Orange} alt="Bottles of milk"/>
            <img src={Cone} alt="Bottles of milk"/>
            <img src={SugarCubes} alt="Bottles of milk"/>
        </div>
    )
}

export default FooterImages;