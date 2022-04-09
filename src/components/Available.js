import * as React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import NavBar from './NavBar';
import '../css/style.css';


export default function Available(props) {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div>
          <FaRegThumbsUp className="thumbs-up" />
        </div>
        <div className='parking-details'>
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