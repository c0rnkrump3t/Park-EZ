import * as React from 'react';
import { FaRegThumbsDown } from "react-icons/fa";
import NavBar from './NavBar';
import '../css/style.css';
import { Link } from 'react-router-dom';


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
      <Link to={`/details${props.sign}`}>
        <button className="parking-button">
        <div>{props.details}</div>

          {/* Details */}
        </button>
        </Link>
        <Link to={`/map`}>
        <button className="parking-button">
        <div>{props.alternatives}</div>

          {/* See alternatives */}
        </button>
        </Link>

      </div>
    </div>
  );
}