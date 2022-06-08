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
                <div className='BGimgs' style={{backgroundImage: `url(${Egg})`}}>
                </div>
            </div>

            <div className='img-boxes strawberry-glass'>
                <div className='BGimgs' style={{backgroundImage: `url(${StrawbGlass})`}}>
                </div>
            </div>

            <div className='squares'>
                <h3>Stand out to the right audience</h3>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
                     we'll build and extend your brand in digital places.
                </p>
                <h4>Learn More</h4>
            </div>

            
            <div className='img-boxes cherries oc-container'>
                <div className='BGimgs' style={{backgroundImage: `url(${Cherries})`}}>
                    <div className='graphictext'>
                        <h2>Graphic Design</h2>
                        <p>
                            Great design makes you memorable. We deliver <br/>
                            artwork that underscores your brand message<br/>
                            and captures potential clients' attention.
                        </p>
                    </div>
                </div>
            </div>

            <div className='img-boxes orange oc-container'>
                <div className='BGimgs' style={{backgroundImage: `url(${Orange})`}}>
                    <div className='phototext'>
                        <h2>Photography</h2>
                        <p>
                            Increase your credibility by getting the most <br/>
                            stunning, high-quality photos that improve your <br/>
                            business image.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyTop;