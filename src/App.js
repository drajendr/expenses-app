import React, { Component } from 'react';
import './App.css';
import Register from "./containers/register/register";
import Navbar from "./components/NavBar/navbar";

class App extends Component {

  constructor(){
    super()
    this.state = {
      login:true,
      signup:false,
      menuIcon:false
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          loginDisable = { this.state.login} 
          signupDisable = { this.state.signup } 
          menuIconDisplay = { this.state.menuIcon } 
        />
        <Register/>
      </div>
    );
  }
}

export default App;
