import * as React from 'react';
import NavBar from './NavBar';
import '../css/style.css';
import { Link } from 'react-router-dom';


export default function Permit(props) {
  return (
    <div className="parking-content">
      <NavBar sign={props.sign}/>
      <div>
        <div className="permit">
          <div>{props.sectorLabel}</div>
          <div>{props.sector}</div>
        </div>
        <div className='parking-details'>
          <div className='permit-text'>{props.permitLabel}</div>          
          <div>{props.message}</div>
          <div>{props.date}</div>
          <div>{props.time}</div>
        </div>
      </div>
      <div className='button-container'>
      <Link to={`/details${props.sign}`}>
        <button className="parking-button">
        <div>{props.details}</div>
        </button>
        </Link>
      </div>
    </div>
  );
}