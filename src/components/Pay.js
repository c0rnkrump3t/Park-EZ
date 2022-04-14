import * as React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import NavBar from './NavBar';
import '../css/style.css';
import { Link } from 'react-router-dom';


export default function Pay(props) {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div className='parking-pay'>
          <FaRegThumbsUp className="thumbs-up-pay" />
          <MdAttachMoney className='attach-money'/>
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
          Details
        </button>
        </Link>
        <a href='https://pservicemobile.passportca.com/park/'>
        <button className="parking-button">
          Pay
        </button>
        </a>
      </div>
    </div>
  );
}

