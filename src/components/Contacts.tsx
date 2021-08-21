import { useEffect, useState } from 'react';
import { getContacts } from '../api/contact';
import ContactItem from './ContactItem';
import './styles/contacts.css';

const Contacts = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getContacts().then(res => setContactList(res));
  }, [])

  return (
    <div>
      <ul className="contact-list-container">
        {
          contactList?.map(({
            id, first_name, last_name, job, description,
          }) => (
            <li key={id} className="contact-list-item">
              <ContactItem
                firstName={first_name}
                lastName={last_name}
                job={job}
                description={description}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Contacts;
