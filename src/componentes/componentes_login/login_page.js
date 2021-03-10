import React, { Component } from 'react';
import LoginForm from './login_form';
import LoginHeader from './login_header';

import '../../css/login_page.css';

class LoginPage extends Component {


    state = {
        usuario: "",
        pass: ""
    };

    onChange = (e) => {

        console.log(e.target.value);

    }

    render(){

        return (
            <div className="contenido-centrado" >
                <LoginHeader></LoginHeader>
                <LoginForm></LoginForm>
            </div>
        );

    }

}

export default LoginPage;
