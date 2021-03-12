import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

   render() {

      return (
         <nav>
            <ul>
               <li> <Link to="/login" >Hola</Link> </li>
               <li> <Link>Como</Link> </li>
               <li> <Link>Estas</Link> </li>
            </ul>
         </nav>
      );

   }

}

export default NavBar;