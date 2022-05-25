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
                    through compelling visuals that do most of the marketing for you.
                </p><br/>
                <h4>Learn More</h4>
            </div>
            <div className='img-boxes yellow-egg'>
                <div>
                    <img src={Egg} alt='an egg with yellow background' className='squares-img-egg'/>
                </div>
            </div>

            <div className='img-boxes strawberry-glass'>
                <div>
                    <img alt='a pink glass' src={StrawbGlass} className='squares-img'/>
                </div>
            </div>

            <div className='squares'>
                <h3>Stand out to the right audience</h3>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
                     we'll build and extend your brand in digital places.
                </p>
                <h4>Learn More</h4>
            </div>

            <div className='img-boxes cherries'>
                <div>
                    <img src={Cherries} alt='cherries' className='squares-img'/>
                </div>
            </div>

            <div className='img-boxes orange'>
                <div>
                    <img src={Orange} alt='an orange' className='squares-img'/>
                </div>
            </div>
        </div>
    )
}

export default BodyTop;