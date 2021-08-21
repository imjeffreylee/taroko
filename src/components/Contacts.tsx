import { useEffect, useState } from 'react';

import ContactItem from './ContactItem';
import './styles/contacts.scss';
import SortImage from '../assets/sort-button.png';
import { Contact } from '../App';

type SortDirection = 'asc' | 'desc';

interface Props {
  contactList: Contact[];
}

const Contacts = ({ contactList }: Props) => {
  const [sortedList, setSortedList] = useState<Contact[]>(contactList);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [sortBy, setSortBy] = useState<keyof Contact>('first_name');

  const sortList = (list: Contact[], sortBy: keyof Contact, sortDirection: SortDirection) => {
    if (!list) return;

    const sorted = list.sort((a: Contact, b: Contact) => {
      const cur = (a[`${sortBy}` as keyof Contact] as string).toLowerCase();
      const next = (b[`${sortBy}` as keyof Contact] as string).toLowerCase();
      if (sortDirection === 'asc') {
        return cur > next ? 1 : -1;
      } else {
        return cur < next ? 1 : -1;
      };
    });

    setSortedList(sorted);
  };

  useEffect(() => {
    sortList(contactList, sortBy, sortDirection);
  }, [sortedList, sortBy, sortDirection, contactList]);

  return (
    <div>
      <div className="header-container">
        <h1>Contacts</h1>
        <div className="sort-control">
          <select name="sortBy" onChange={(e) => setSortBy(e.target.value as keyof Contact)}>
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
            <option value="job">Job</option>
          </select>
          <img
            src={SortImage}
            alt="sort"
            className={sortDirection === 'asc' ? '' : 'rotate'}
            onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
          />
        </div>
      </div>
      <ul className="contact-list-container">
        {
          sortedList && sortedList.map(({
            id, first_name, last_name, job, description,
          }) => (
            <li key={id} className="contact-list-item">
              <ContactItem
                id={id}
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
