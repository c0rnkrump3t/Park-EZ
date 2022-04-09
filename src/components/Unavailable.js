import * as React from 'react';
import { FaRegThumbsDown } from "react-icons/fa";
import NavBar from './NavBar';
import '../css/style.css';


export default function Unavailable(props) {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div>
          <FaRegThumbsDown className="thumbs-down" />
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
        <button className="parking-button">
          See alternatives
        </button>
      </div>
    </div>
  );
}