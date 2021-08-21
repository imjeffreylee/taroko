import { useContext } from 'react';
import { deleteContact } from '../api/contact';
import { FetchContacts } from '../App';
import './styles/popupConfirm.scss';

interface Props {
  handlePopupClose: (status: boolean) => void;
  contactId: number;
}

const PopupConfirm = ({ handlePopupClose, contactId }: Props) => {
  const getSortedContacts = useContext(FetchContacts);

  const handleDelete = () => {
    deleteContact(contactId).then(result => {
      getSortedContacts();
      return result;
    });
    handlePopupClose(false);
  }


  return (
    <div className="popup-confirm-container">
      <div className="popup-confirm-inner">
        <p>Are you sure you want to delete this contact? This is irreversible.</p>
        <div className="form-button-group">
          <button
            className="button"
            onClick={handleDelete}
          >
            Delete
          </button>
          &nbsp;
          <button
            className="button"
            onClick={() => handlePopupClose(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopupConfirm
