import * as React from 'react';
import NavBar from './NavBar';
import { BiHandicap } from 'react-icons/bi';
import '../css/style.css';
import { Link, useLocation } from 'react-router-dom';

export default function Handicap(props) {
  
  const location = useLocation();
  const currentPage = location.pathname.substring(1,);
  const currentPath = currentPage.replace('-FR', '');

  return (
    <div className="parking-content">
      <NavBar currentPath={currentPath} />
      <div>
        <div>
          <BiHandicap className="handicap" />
        </div>
        <div className='parking-details'>
          <div>{props.message}</div>
        </div>
      </div>
      <div className='button-container'>
        <Link to={`/details${props.sign}?signpage=${currentPage}`}>
          <button className="parking-button">
            <div>{props.details}</div>
          </button>
        </Link>
      </div>
    </div>
  );
}