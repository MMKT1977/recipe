import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './About';
import Logo from './Logo';
{/*There is need for a data.js file which will store the recipes to be imported as props 
and used by the components accordingly*/} 


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is our recipe webpage.
        </p>
        
      </header>
    </div>
  );
}

export default App;
