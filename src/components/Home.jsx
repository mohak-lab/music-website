import React from 'react';
import logo from '../images/greenpiano.jpg';
import Common from './Common';

function Home() {
    return (
        <div>
            <Common 
                sname="Music "
                lname="for everyone"
                imgsrc={logo}
                visit="/service"
                btnname="Get Started"   
            />
        </div>
    );
}

export default Home;