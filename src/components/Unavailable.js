import * as React from 'react';
import { FaRegThumbsDown } from "react-icons/fa";
import NavBar from './NavBar';
import '../css/style.css';


export default function Unavailable() {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div>
          <FaRegThumbsDown className="thumbs-down" />
        </div>

        <div className='parking-details'>
          <div>Available after</div>
          <div>Friday, April 6, 2022</div>
          <div>9:00 P.M.</div>
        </div>
      </div>
      <div className='button-container'>
        <button className="parking-button">
          Details
        </button>
        <button className="parking-button">
          See alternatives
        </button>
      </div>
    </div>
  );
}