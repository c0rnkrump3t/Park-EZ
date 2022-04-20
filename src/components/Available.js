import * as React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import NavBar from './NavBar';
import '../css/style.css';
import { Link } from 'react-router-dom';

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
          <div>{props.lang}</div>

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