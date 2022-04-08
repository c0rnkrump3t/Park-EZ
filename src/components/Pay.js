import * as React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import NavBar from './NavBar';
import '../css/style.css';


export default function Pay() {
  return (
    <div className="parking-content">
      <NavBar />
      <div>
        <div className='parking-pay'>
          <FaRegThumbsUp className="thumbs-up-pay" />
          <MdAttachMoney className='attach-money'/>
        </div>
        <div className='parking-details'>
          <div>Payment required until</div>
          <div>Friday, April 6, 2022</div>
          <div>6:00 P.M.</div>
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