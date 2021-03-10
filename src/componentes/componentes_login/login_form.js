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
            <div>
                <form>
                    <label className="label-style" >Usuario: </label>
                    <input type="text" name="user" placeholder="Usuario" value={this.state.user} onChange={this.onChange} className="input-style" />
                    <br/>
                    <label className="label-style" >Contraseña: </label>
                    <input type="password" name="pass" placeholder="Contraseña" value={this.state.pass} onChange={this.onChange} className="input-style" />
                    <br/>
                    <br/>
                    <input type="submit" value="Ingresar" />
                </form>
            </div>
        );

    }




}

export default LoginForm;