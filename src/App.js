import React from "react";
import Header from './components/Header';
import BodyTop from './components/BodyTop';
import Testimonials from "./components/Testimonials";
import './css/App.css';

function App(){
    
    return(
        < div className='app-div'>
            <Header />
            <BodyTop />
            <Testimonials />
        </div>
    )
}

export default App;
