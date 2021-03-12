import React from 'react';
import Home from './componentes/componentes_home/home_page';
import LoginPage from './componentes/componentes_login/login_page'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/home" component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
