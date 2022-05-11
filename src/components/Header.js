import React from 'react';
import '../css/Header.css';
import AgencyLogo from './images/logo.svg';
import ImageHeader from './images/desktop/image-header.jpg';
import ArrowDown from './images/icon-arrow-down.svg';

function Header(){
    return(
        <div className='header-container'>
            <div className='HeaderBG'>
                <img alt='Header logo' className='HeaderImgBG' src={ImageHeader}/>
            </div>
            <div className='companyName'>
                <img alt='agency logo' src={AgencyLogo} className='agencyLogo'/>
            </div>
            <div className='arrow-text'>
                <h1>WE ARE CREATIVES</h1>
                <img alt='arrow pointing down' src={ArrowDown} className='arrow'/>
            </div>
            <div className='menu'>
                <ul className='menu-list'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;