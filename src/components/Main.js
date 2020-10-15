import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from './Login';
import RegistrationForm from './RegistrationForm';
import Showcase from './Showcase';


function Main (props) {


    return(
        <Switch>
            <Route path='/home' component={Showcase} />
            <Route path='/login/' component={Login} />
            <Route path='/register' component={RegistrationForm} />
            {/* <Route path='/clinician' component={ClinicianDashboard} /> */}
            {/* <Route path='/patient' component={NewPatient} /> */}
            {/* <Route path='/exercise' component={Exercise} /> */}
            <Redirect to="/home" />
        </Switch>
    )

}

export default Main;