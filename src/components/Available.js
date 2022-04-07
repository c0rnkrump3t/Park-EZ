import * as React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import NavBar from './NavBar';
import '../css/style.css';


export default function Available() {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div>
          <FaRegThumbsUp className="thumbs-up" />
        </div>

        <div className='parking-details'>
          <div>Until Friday 1, 2022</div>
          <div>9:00 P.M.</div>
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