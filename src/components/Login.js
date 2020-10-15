import React from 'react'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/ionicons.min.css'
import '../assets/css/Login-Form-Dark.css'


import RegistrationForm from './RegistrationForm';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component{

    constructor(props){
        super(props)

        

        this.state = {username:"", password:""};
    }
    

    validateFormData = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));

        let username = this.state.username.trim();
        let password = this.state.password.trim();

        // alert("Current state " + JSON.stringify(this.state))
        if(username.length === 0){
            alert("username can not be null")
            return;
        }else if (password.length === 0){
            alert("password can not be null")
            return;
        }       

        var passwordHash = require('password-hash');

        var hashedPassword = passwordHash.generate(password);

        console.log(hashedPassword)

        this.setState({password:hashedPassword});
        
        console.log(JSON.stringify(this.state));

        // Hardcodded login credentialss.

        if(username === "admin" && password === "admin"){
            this.props.history.push('/admin');
        }else if(username === "director" && password === "director"){
            this.props.history.push('/director');
        }else if(username === "clinician1" && password === "clinician1"){
            this.props.history.push('/clinician');
        }

        return;
    }


    onValueChange = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]:val})
    }

    registerUser = () => {
        // alert("Register User Here!")
        this.props.history.push('register');
    }

    forgetPassword = () => {
        alert("Password Forgotten") 
    }

    render (){

        return (

            <div>
                <div className="login-dark">
                    <form onSubmit={this.validateFormData}> 
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                        <div className="form-group"><input className="form-control" type="text" name="username" placeholder="Username" onChange = {this.onValueChange} /></div>
                        <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" onChange = {this.onValueChange} /></div>
                        <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Log In</button></div>
                        <a className="forgot" href="#" onClick ={this.forgetPassword}>Forgot username or password?</a>
                        <br/>
                        <a className="forgot" href="#" onClick ={this.registerUser} ><b>Register Your Clinic</b><br/><i>Try free for 30 days</i></a>
                        
                    </form>
                </div>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/bootstrap/js/bootstrap.min.js"></script>
  
            </div>
        );

    }
}

export default withRouter(LoginForm);