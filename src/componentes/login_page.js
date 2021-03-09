import React, { Component } from 'react';
import './login_page.css';

export default class LoginPage extends Component {

    render(){

        return (
            <div>
                
                <div className="estilo-nombre contenido-centrado" > La Jama Sana </div>
                <div className="contenido-centrado" > <img src="https://i.imgur.com/zUIOEXt.png" /> </div>
                <div className="estilo-nombre contenido-centrado" > Vendedor </div>
                <div className="contenido-centrado">
                    <form>
                        {/* <label for="usuario" > Usuario: </label> */}
                        <p className="estilo-label" >Usuario: </p>
                        <input name="usuario" placeholder="Ingrese su usuario..." type="text"/>
                        <br/>
                        {/* <label for="pass" > Contrasenia: </label> */}
                        <p className="estilo-label" >Contrasenia: </p>
                        <input name="pass" placeholder="Ingrese su contrasenia..." type="password" />
                        <br/>
                        <input type="submit" value="Ingresar" />
                    </form>
                </div>

            </div>
        );

    }

}

