import React, {useState} from 'react';

import '../assets/bootstrap/css/bbootstrap.min.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/Header.css';

import logo from '../assets/img/btnimg.png';


function Header (props) {

    const [navLinkOpen, navLinkToggle] = useState(true);
    // username and account type will be passed to this component.
    var [username, setUsername] = useState(props[0]);
    var [accountType, setType] = useState(props[1]);


   

    const settinghandler = () => {
        let settings = document.getElementById('settings');

        if(settings.value === 'AccountInfo'){
            this.setState({"accountInfoPopup":true, "params":[this.state.username, this.state.clinicianName]});
        }
        else if (settings.value === 'Logout')
            this.logout()
        else if (settings.value === 'ChangePassword'){
            this.setState({"changepasswordpopup":true, "params":[this.state.username]});
        }

        settings.selectedIndex = 0;
    }
    
    const homeHandler = () => {
        alert("working")
    }

    const handleNavLinkToggle = () => {
        navLinkToggle(!navLinkOpen);
    }

    const renderClasses = () => {
        let classes = 'headernavlink';

        if(navLinkOpen){
            classes += ' headeractive';
        }

        return classes;
    }

    return (
        <nav className="navigation_class gradient">
            <div className="headerlogo">
                <i><img src={logo} /></i>
                <h4>Therasheet</h4>
            </div>
            <ul className={renderClasses()}>
                <li className="headerlink"><a className="ainheader" href={"#"} onClick={homeHandler} >Profile Info</a></li>
                <li className="headerlink"><a className="ainheader" href={"#"} >Change Password</a></li>
                <li className="headerlink"><a className="ainheader" href={"#"} >Logout</a></li>
            </ul>
            <div onClick={handleNavLinkToggle} className="header-hamburger-toggle">
                <i className="fas fa-bars fa-lg"></i>
            </div>

               {/*}
                <select id="settings" className="btn btn-primary text-right" type="button" onChange={settinghandler} style={{backgroundColor:"#5376f4", backgroundImage: "url("+Background+")" , width:"5vh", height:"5vh"}}>
                    <option  value="none" selected disabled hidden>Settings</option>
                    <option value="AccountInfo" style={{backgroundColor:"white", color:"black", fontSize:"14px"}} >Account Info</option>
                    <option value="ChangePassword" style={{backgroundColor:"white", color:"black", fontSize:"14px"}} >Change Password</option>
                    <option value="Logout" style={{backgroundColor:"white", color:"black" , fontSize:"14px"}}>Logout</option>
                </select>  */}
        </nav>
    )
}

export default Header;