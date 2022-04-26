import * as React from 'react';
import { FaRegThumbsDown } from "react-icons/fa";
import NavBar from './NavBar';
import '../css/style.css';
import { Link, useLocation } from 'react-router-dom';


export default function Unavailable(props) {

  const location = useLocation();
  const currentPage = location.pathname.substring(1,);
  const currentPath = currentPage.replace('-FR', '')

  return (
    <div className="parking-content">
      <NavBar currentPath={currentPath} />
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
        <Link to={`/details${props.sign}?signpage=${currentPage}`}>
          <button className="parking-button">
            <div>{props.details}</div>
            {/* Details */}
          </button>
        </Link>
        <Link to={`/map?signpage=${currentPage}`}>
          <button className="parking-button">
            <div>{props.alternatives}</div>

            {/* See alternatives */}
          </button>
        </Link>       

      </div>
    </div>
  );
}