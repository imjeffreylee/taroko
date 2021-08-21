import { useContext, useEffect, useState } from 'react';

import './styles/popup.scss';
import { createContact, updateContact } from '../api/contact';
import { CurrentContactInfo } from './ContactItem';
import { GlobalContext } from '../App';

interface Props {
  handlePopupClose: (status: boolean) => void;
  type: 'create' | 'edit';
  id?: number;
}

const Popup = ({ handlePopupClose, type, id }: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [job, setJob] = useState('');
  const [description, setDescription] = useState('');

  const { getSortedContacts, setAlertStatus } = useContext(GlobalContext);

  const {
    firstName: currentFirstName,
    lastName: currentLastName,
    job: currentJob,
    description: currentDescription,
  } = useContext(CurrentContactInfo);

  const handleSave = () => {
    if (type === 'create') {
      createContact({
        first_name: firstName,
        last_name: lastName,
        job,
        description,
      }).then(result => {
        setAlertStatus(true);
        getSortedContacts();
        return result;
      });
    };
    if (type === 'edit') {
      updateContact({
        id,
        first_name: firstName,
        last_name: lastName,
        job,
        description,
      }).then(result => {
        setAlertStatus(true);
        getSortedContacts();
        return result;
      });
    }
    handlePopupClose(false);
  };

  useEffect(() => {
    if (type === 'edit') {
      setFirstName(currentFirstName);
      setLastName(currentLastName);
      setJob(currentJob);
      setDescription(currentDescription);
    };
  }, []);

  return (
    <div className="popup-container">
      <div className="popup-form">
        <h1>{type === 'create' ? 'Add Contact' : 'Edit Contact'}</h1>
        <div className="popup-inner">
          <form>
            <div className="full-name">
              <div className="fieldset-names">
                <label htmlFor="firstName">First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="fieldset-names">
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="fieldset-others">
              <label htmlFor="job">Job: </label>
              <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <div className="fieldset-others">
              <label htmlFor="description">Description: </label>
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="form-button-group">
          <button
            className="button"
            onClick={handleSave}
          >
            Save
          </button>
          &nbsp;
          <button
            className="button"
            onClick={() => handlePopupClose(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
