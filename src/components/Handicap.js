import * as React from 'react';
import NavBar from './NavBar';
import { BiHandicap } from 'react-icons/bi';
import '../css/style.css';


export default function Handicap() {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div>
          <BiHandicap className="handicap" />
        </div>
        <div className='parking-details'>
          <div>ONLY</div>
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