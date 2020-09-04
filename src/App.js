// App.jsx

import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './CV.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    document.body.style = 'background:#4287f5;',
      <BrowserRouter >
        <div className="App">


          <div className="navigation">

            <div className="navigation-sub">

            <Link to="/" style={{ textDecoration: 'none',color:'black' }} className="item">Projects</Link>
            <Link to="/articles" style={{ textDecoration: 'none',color:'black' }} className="item">CV</Link>
            <Link to="/about" style={{ textDecoration: 'none',color:'black' }} className="item">About</Link>

            </div>

          </div>
          <Route exact path="/"component={Projects} />
          <Route path="/articles"  component={Articles} />
          <Route path="/about"  component={About} />
        </div>

      </BrowserRouter>


  );
}

export default App;
