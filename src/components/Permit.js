import * as React from 'react';
import NavBar from './NavBar';
import '../css/style.css';


export default function Permit() {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div className="permit">
          <div>SECTOR</div>
          <div>135</div>
        </div>
        <div className='parking-details'>
          <div className='permit-text'>BY PERMIT ONLY</div>
          <div>Without permit</div>
          <div>available after</div>
          <div>Friday, April 6, 2022</div>
          <div>4:00 P.M.</div>
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