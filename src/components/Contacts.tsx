import { useEffect, useState } from 'react';

import ContactItem from './ContactItem';
import './styles/contacts.scss';
import { getContacts } from '../api/contact';
import SortImage from '../assets/sort-button.png';

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}

type SortDirection = 'asc' | 'desc';

const Contacts = () => {
  const [contactList, setContactList] = useState<Contact[]>([]);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [sortBy, setSortBy] = useState<keyof Contact>('first_name');

  const sortList = (list: Contact[], sortBy: keyof Contact, sortDirection: SortDirection) => {
    if (!list) return;
    const sortedList = sortDirection === 'asc'
      ? list.sort((a: Contact, b: Contact) => a[`${sortBy}` as keyof Contact] > b[`${sortBy}` as keyof Contact] ? 1 : -1)
      : list.sort((a: Contact, b: Contact) => a[`${sortBy}` as keyof Contact] < b[`${sortBy}` as keyof Contact] ? 1 : -1);
    setContactList(sortedList);
  };

  useEffect(() => {
    getContacts().then(result => sortList(result, sortBy, sortDirection));
  }, []);

  useEffect(() => {
    sortList(contactList, sortBy, sortDirection);
  }, [contactList, sortBy, sortDirection]);

  return (
    <div>
      <div className="header-container">
        <h1>Contacts</h1>
        <div className="sort-control">
          <select name="sortBy" onChange={(e) => setSortBy(e.target.value as keyof Contact)}>
            <option value="first_name">first_name</option>
            <option value="last_name">last_name</option>
            <option value="job">job</option>
          </select>
          <img
            src={SortImage}
            alt="sort"
            onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
          />
        </div>
      </div>
      <ul className="contact-list-container">
        {
          contactList && contactList.map(({
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
