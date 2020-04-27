import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import styled from 'styled-components';
import companylogo from './company-logo.png';


const NavBarContainer = styled.div`
background-color: whitesmoke;
display: flex;
width: 100%;

.navigation{
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    background-color: #3a7669;
    align-items: center;
    
    
}

.navigation a{
  text-decoration: none;
  color: white;
  font-weight: bold;
  
}

img{
  width: 130px;
}

`



function App() {
  return (
    <div className="App">

      
        <NavBarContainer>
        
          <nav className="navigation">          
          <img src = {companylogo} className = "company-logo" alt="company-logo"/>          
              <Link to='/'>Sign Up</Link>
              <Link to='/Order' >Log in</Link>       
          </nav>
        
          </NavBarContainer>
        
      <Route exact path="/">
          <RegisterForm />
        </Route>    
        <Route path="/Order">
          <LoginForm />
        </Route>
      

      
    </div>
  );
}

export default App;
