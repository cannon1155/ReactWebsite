import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';


function Thumbnail(props) {
  return (
    <div className="project" >
      <Link to={props.link} style={{ textDecoration: 'none',color:'black' }}>
        <div className="project-image">
          <img src={props.image} width="200" height="200" alt="Project Image"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
