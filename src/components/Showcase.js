import React from 'react';
import {useHistory} from 'react-router-dom';

import '../assets/css/BasicComponents.css';

function Showcase(){

        const history = useHistory();

        const login_btn_click_handler = () => {
               history.push('/login');
        }

        
        const register_btn_click_handler = () => {
                history.push('/register');
         }

        return <div className="showcase">
                        <h2>Come and Register Today</h2>
                        <h1>Therasheet Clinic</h1>
                        <p>Therasheet clinic service providers</p>
                        <div className="showcase_button">
                                <button onClick={login_btn_click_handler} className="showcase_btn_login" >Login</button>
                                <button onClick={register_btn_click_handler} className="showcase_btn_register" >Register</button>
                        </div>
                </div>
}

export default Showcase;