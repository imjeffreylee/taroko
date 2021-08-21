import { useState } from 'react';
import Loading from './Loading';

import Popup from './Popup';
import './styles/navbar.css';

interface Props {
  loading: boolean;
}

const Navbar = ({ loading }: Props) => {
  const [popupStatus, setPopupStatus] = useState(false);

  return (
    <div className="nav-container">
      {
        popupStatus && (
          <Popup handlePopupClose={setPopupStatus} type="create" />
        )
      }
      <nav>
        <ul>
          <li>
            Contact List
          </li>
        </ul>
      </nav>
      {loading && <Loading />}
      <div>
        <button
          className="button"
          onClick={() => setPopupStatus(true)}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
