import * as React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import NavBar from './NavBar';
import '../css/style.css';
import { Link, useLocation } from 'react-router-dom';


export default function Pay(props) {
  const location = useLocation();
  const currentPage = location.pathname.substring(1,);
  const currentPath = currentPage.replace('-FR', '')

  return (
    <div className="parking-content">
      <NavBar currentPath={currentPath} />
      <div>
        <div className='parking-pay'>
          <FaRegThumbsUp className="thumbs-up-pay" />
          <MdAttachMoney className='attach-money' />
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
          </button>
        </Link>
        <a href='https://pservicemobile.passportca.com/park/'>
          <button className="parking-button">
            <div>{props.pay}</div>
          </button>
        </a>
      </div>
    </div>
  );
}

