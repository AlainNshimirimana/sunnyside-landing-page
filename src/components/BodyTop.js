import React from 'react';
import '../css/BodyTop.css';
import Egg from './images/desktop/image-transform.jpg';
import StrawbGlass from './images/desktop/image-stand-out.jpg';
import Cherries from './images/desktop/image-graphic-design.jpg';
import Orange from './images/desktop/image-photography.jpg';

function BodyTop(){
    return(
        <div className='bodyTop'>

            <div className='squares'>
                <h3>Transform your brand</h3>
                <p>We area full-service creative agency specializing in helping brands grow fast. Engage your clients
                    through compelling visuals that do most of the marketing for you.>
                </p><br/>
                <h6>Learn More</h6>
            </div>

            <div className='squares'>
                <img src={Egg} alt='an egg with yellow background'/>
            </div>

            <div className='squares'>
                <img alt='a pink glass' src={StrawbGlass}/>
            </div>

            <div className='squares'>
                <h3>Stand out to the right audience</h3>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
                     we'll build and extend your brand in digital places.
                </p>
                <h6>Learn More</h6>
            </div>

            <div className='squares'>
                <img src={Cherries} alt='cherries'/>
            </div>
            <div className='squares'>
                <img src={Orange} alt='an orange'/>
            </div>
        </div>
    )
}

export default BodyTop;