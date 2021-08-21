import { createContext, useEffect, useState } from 'react';

import './App.css';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import { getContacts } from './api/contact';

export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}

export const FetchContacts = createContext<() => void>(() => { });

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>();

  const getSortedContacts = () => {
    getContacts().then(result => setContacts(result));
  };

  useEffect(() => {
    getSortedContacts();
  }, []);

  return (
    <div className="app">
      <FetchContacts.Provider value={getSortedContacts}>
        <Navbar />
        {contacts && <Contacts contactList={contacts} />}
      </FetchContacts.Provider>
    </div>
  );
}

export default App;
