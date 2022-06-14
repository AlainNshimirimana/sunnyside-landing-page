import React from 'react';
import '../css/Testimonials.css';
import Emily from './images/image-emily.jpg';
import Thomas from './images/image-thomas.jpg';
import Jennie from './images/image-jennie.jpg';

function Testimonials(){
    return(
        <div className='testimonials'>
            <h3 className='test-h3'>CLIENT TESTIMONIALS</h3>

            <div className='testimonial-arrange'>
                <div className='testimonial-div'>
                    <img alt='photo of emily' src={Emily} className='test-img'/>
                    <p className='client-commnet'>
                        We put our trust in Sunnyside and they <br/>
                        delivered, making sure our needs were met <br/>
                        and deadlines were always hit.
                    </p>
                    <div>
                        <h4 className='test-h4'>Emily R.</h4>
                        <p className='job-title'>Marketing Director</p>
                    </div>
                </div>

                <div className='testimonial-div'>
                    <img alt='photo of Thomas' src={Thomas} className='test-img'/>
                    <p className='client-commnet'>
                        Sunnyside's enthusiam coupled with their <br/>
                        keen interest in our brand's success made it <br/>
                        a satisfying and enjoyable experience.
                    </p>
                    <div>
                        <h4 className='test-h4'>Thomas S.</h4>
                        <p className='job-title'>Chief Operating Officer</p>
                    </div>
                </div>

                <div className='testimonial-div'>
                    <img alt='photo of Jennie' src={Jennie} className='test-img'/>
                    <p className='client-commnet'>
                        Incredible end result! Our sales increased <br/>
                        over 400% when we worked with Sunnyside. <br/>
                        Highly recommended!
                    </p>
                    <div>
                        <h4 className='test-h4'>Jennie F.</h4>
                        <p className='job-title'>Business Owner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;