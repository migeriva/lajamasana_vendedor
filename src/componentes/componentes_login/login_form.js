import React, { Component } from 'react';
import '../../css/login_page.css';

class LoginForm extends Component {

    state = {
        user: "",
        pass: ""
    }

    onChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }

    onSubmit = e => {
        e.preventDefault();
    }

    render() {

        return (
            <div className="contenido-form" >
                <form onSubmit = {this.onSubmit}>
                    <div className="row-form" >
                        <p className="label-style" >Usuario: </p>
                        <input className="input-style" type="text" name="user" placeholder="Usuario" value={this.state.user} onChange={this.onChange} />
                    </div>
                    <br/>
                    <div className="row-form" >
                        <p className="label-style" >Contraseña: </p>
                        <input className="input-style" type="password" name="pass" placeholder="Contraseña" value={this.state.pass} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div className="row-form" >
                        <p className="label-style" >Tipo: </p>
                        <input className="input-style" type="text" name="tipo" value="Vendedor" disabled={true}/>
                    </div>
                    <br/>
                    <br/>
                    <input type="submit" value="Ingresar" />
                </form>
            </div>
        );

    }
}

export default LoginForm;