import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/css/Navbar.css';


import logo from '../assets/img/btnimg.png';

const Navbar = () => {

    const [navLinkOpen, navLinkToggle] = useState(true);
    const history = useHistory();

    const handleNavLinkToggle = () => {
        navLinkToggle(!navLinkOpen);
    }

    const renderClasses = () => {
        let classes = 'navlink';

        if(navLinkOpen){
            classes += ' active';
        }

        return classes;
    }


    const homeHandler = () =>{
        history.push('/home');
        }

    return <nav className="navclass">
                <div className="navlogo">
                    <i><img src={logo} /></i>
                    <h4>Therasheet</h4>
                </div>
                <ul className={renderClasses()}>
                    <li className="linkinnav"><a className="ainnav" href={"#"} onClick={homeHandler}>Home</a></li>
                    <li className="linkinnav"><a className="ainnav" href={"#"} >About</a></li>
                    <li className="linkinnav"><a className="ainnav" href={"#"} >Services</a></li>
                    <li className="linkinnav"><a className="ainnav" href={"#"} >Contact Us</a></li>
                </ul>
                <div onClick={handleNavLinkToggle} className="hamburger-toggle">
                    <i className="fas fa-bars fa-lg"></i>
                </div>
            </nav>
}

export default Navbar;