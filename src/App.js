import React from "react";
import Header from './components/Header';
import BodyTop from './components/BodyTop';
import Testimonials from "./components/Testimonials";
import FooterImages from "./components/FooterImages";
import Footer from "./components/Footer";
import './css/App.css';

function App(){
    
    return(
        < div className='app-div'>
            <Header />
            <BodyTop />
            <Testimonials />
            <FooterImages />
            <Footer />
        </div>
    )
}

export default App;
