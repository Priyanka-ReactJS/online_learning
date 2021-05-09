import React from 'react';
import {Switch ,Route, Redirect} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Home from './home';
import About from './about';
import Contact from './contact';
import Service from './services';
import NavbarWarp from './Navbar';
import FooterWrap from './footer'


const App = () => {
  return(
    <>
    <NavbarWarp/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/services" component={Service}/>
    <Redirect to="/"/>
    </Switch>
    <FooterWrap/>
    </>
  )
}

export default App;
