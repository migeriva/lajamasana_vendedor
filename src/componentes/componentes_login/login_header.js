import React, { Component } from 'react';
import '../../css/login_page.css';

class LoginHeader extends Component {

    render(){

        return (
            <div className="contenido-centrado" >
                <p className="title-style" >La Jama Sana</p>
                <img src="https://i.imgur.com/zUIOEXt.png" alt="logo-jamasana"  />
                <p className="title-style" > Vendedor </p>
            </div>
        );

    }


}

export default LoginHeader;