import './styles/contactItem.css';
import PersonIcon from '@material-ui/icons/Person';
import { createContext, useState } from 'react';
import PopupConfirm from './PopupConfirm';
import Popup from './Popup';

interface Props {
  id: number;
  firstName: string;
  lastName: string;
  job: string;
  description: string;
}

export const CurrentContactInfo = createContext({
  id: 0,
  firstName: '',
  lastName: '',
  job: '',
  description: '',
});

const ContactItem = (props: Props) => {
  const { id, firstName, lastName, job, description } = props;
  const [popupConfirmStatus, setPopupConfirmStatus] = useState(false);
  const [popupStatus, setPopupStatus] = useState(false);

  return (
    <div className="contact-item-container">
      {
        popupConfirmStatus && (
          <PopupConfirm handlePopupClose={setPopupConfirmStatus} contactId={id} />
        )
      }
      {
        popupStatus && (
          <CurrentContactInfo.Provider value={props}>
            <Popup handlePopupClose={setPopupStatus} type="edit" id={id} />
          </CurrentContactInfo.Provider>
        )
      }
      <div className="contact-info">
        <div className="contact-info__icon-and-name">
          <PersonIcon style={{ width: '2em', height: '2em' }} />
          <span>{firstName} {lastName}</span>
        </div>
        <p>Job: {job}</p>
        <p>Description: {description}</p>
      </div>
      <div className="button-group">
        <button
          className="button contact-item-button"
          onClick={() => setPopupStatus(true)}
        >
          Edit
        </button>
        <button
          className="button contact-item-button"
          onClick={() => setPopupConfirmStatus(true)}
        >
          Delete
        </button>
      </div>
    </div >
  )
}

export default ContactItem
