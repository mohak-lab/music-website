import React from 'react';
import logo from '../images/studio.jpg';
import Common from "./Common";

function About() {
    return (
        <div>
           <Common
                sname="Welcome "
                lname="to About Page"
                imgsrc={logo}
                visit="/contact"
                btnname="Contact Now"
            />
        </div>
    );
}

export default About; 