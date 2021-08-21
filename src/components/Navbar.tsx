import { useState } from 'react';
import Popup from './Popup';
import './styles/navbar.css'

const Navbar = () => {
  const [popupStatus, setPopupStatus] = useState(false);

  return (
    <div className="nav-container">
      {
        popupStatus && (
          <Popup handlePopupClose={setPopupStatus} />
        )
      }
      <nav>
        <ul>
          <li>Contact List</li>
          <li>Contact List</li>
          <li>Contact List</li>
          <li>Contact List</li>
          <li>Contact List</li>
          <li>Contact List</li>
        </ul>
      </nav>
      <div>
        <button
          className="button"
          onClick={() => setPopupStatus(popupStatus ? false : true)}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
