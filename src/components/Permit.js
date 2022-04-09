import * as React from 'react';
import NavBar from './NavBar';
import '../css/style.css';


export default function Permit(props) {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div className="permit">
          <div>SECTOR</div>
          <div>{props.sector}</div>
        </div>
        <div className='parking-details'>
          <div className='permit-text'>BY PERMIT ONLY</div>          
          <div>{props.message}</div>
          <div>{props.date}</div>
          <div>{props.time}</div>
        </div>
      </div>
      <div className='button-container'>
        <button className="parking-button">
          Details
        </button>
      </div>
    </div>
  );
}