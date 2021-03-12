import React, { Component } from 'react';
import LoginForm from './login_form';
import LoginHeader from './login_header';
import '../../css/login_page.css';

class LoginPage extends Component {

    render(){
        return (
            <div className="contenido-centrado" >
                <LoginHeader/>
                <LoginForm/>
            </div>
        );
    }
}

export default LoginPage;
