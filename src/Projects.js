import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import DuckBills from './Projects/DuckBills.js';
import Mazeable from './Projects/Mazeable.js';
import PortfolioWebsite from './Projects/PortfolioWebsite.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import mazeable from './Feature Graphic.png';
import duckBills from './duckBillFeatureGraphic.png';
import portfolioWebsite from './portfolioWebsiteGraphic.png';

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
            link="/portfolioWebsite"
            image={portfolioWebsite}
            title="Portfolio Website"
            category="Website"
          />


          <Route path="/portfolioWebsite"  component={PortfolioWebsite} />
        </div>

      </BrowserRouter>
    )

  }






export default Projects;
