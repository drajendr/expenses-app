import React, { Component } from 'react';
import './App.css';
import Register from "./containers/register/register";
import Navbar from "./components/NavBar/navbar";
import { Route } from "react-router-dom";
import Login from "./containers/login/login";

class App extends Component {

  constructor(){
    super()
    this.state = {
      initialState : {
        login:true,
        signup:false,
        menuIcon:false
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          loginDisable = { this.state.initialState.login} 
          signupDisable = { this.state.initialState.signup } 
          menuIconDisplay = { this.state.initialState.menuIcon } 
        />
        <Route path="/signup" component={ Register } />
        <Route path="/login"  component={ Login } />        
      </div>
    );
  }
}

export default App; 
