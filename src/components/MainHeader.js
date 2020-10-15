import React from 'react';
import Header from './Header'
import Navbar from './Navbar';


function MainHeader (props) {

    const showHeader = props.showHeader;
    

    switch (showHeader) {
        case 0:
            return <div></div>
        case 1:
            return <Navbar />
        
        default:
            return <Header />
    }

}

export default MainHeader;