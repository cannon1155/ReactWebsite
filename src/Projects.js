import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import DuckBills from './Projects/DuckBills.js';
import Mazeable from './Projects/Mazeable.js';
import Spinable from './Projects/Spinable.js';
import PortfolioWebsite from './Projects/PortfolioWebsite.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import mazeable from './Feature Graphic.png';
import duckBills from './duckBillFeatureGraphic.png';

function Projects(props) {


    return (
      <BrowserRouter >
        <div style={{background:'#4287f5'}}>
          <h1>Projects</h1>
          <Thumbnail
            link="/duckBills"
            image={duckBills}
            title="Duck Bills"
            category="Mobile App (IOS and Android)"
            />
          <Route exact path="/duckBills"component={DuckBills} />
          <Thumbnail
            link="/mazeable"
            image={mazeable}
            title="Mazeable"
            category="Mobile App (Android)"
          />
          <Route path="/mazeable"  component={Mazeable} />

          <Thumbnail
            link="/spinable"
            image="https://gamepedia.cursecdn.com/crosscode_gamepedia/6/64/Torso-bronze.png?version=e034a9df23c618300b639fd0033d2c65"
            title="Spinable"
            category="Unity Game (Android,Ios,Website,Windows)"
          />


          <Route path="/spinable"  component={Spinable} />
          <Thumbnail
            link="/portfolioWebsite"
            image="https://gamepedia.cursecdn.com/crosscode_gamepedia/6/64/Torso-bronze.png?version=e034a9df23c618300b639fd0033d2c65"
            title="Portfolio Website"
            category="Website"
          />


          <Route path="/portfolioWebsite"  component={PortfolioWebsite} />
        </div>

      </BrowserRouter>
    )

  }






export default Projects;
