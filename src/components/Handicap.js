import * as React from 'react';
import NavBar from './NavBar';
import { BiHandicap } from 'react-icons/bi';
import '../css/style.css';
import { Link } from 'react-router-dom';


export default function Handicap(props) {
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
      <Link to={`/details${props.sign}`}>
        <button className="parking-button">
          Details
        </button>
        </Link>
      </div>
    </div>
  );
}