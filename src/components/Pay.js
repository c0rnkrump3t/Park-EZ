import * as React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import NavBar from './NavBar';
import '../css/style.css';


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
        <button className="parking-button">
          Details
        </button>
        <button className="parking-button">
          Pay
        </button>
      </div>
    </div>
  );
}