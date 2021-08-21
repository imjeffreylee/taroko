import { createContext, useEffect, useState, Fragment, Dispatch, SetStateAction } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

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

export interface Context {
  getSortedContacts: () => void;
  setAlertStatus: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<Context>({} as Context);

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>();
  const [loading, setLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState(false);

  const getSortedContacts = () => {
    setLoading(true);
    getContacts()
      .then(result => setContacts(result))
      .finally(() => setLoading(false))
  };

  useEffect(() => {
    getSortedContacts();
  }, []);

  return (
    <div className="app">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={alertStatus}
        autoHideDuration={5000}
        onClose={() => setAlertStatus(false)}
        message="Contacts updated!"
        action={
          <Fragment>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Fragment>
        }
        style={{ fontFamily: '"Pangolin", cursive' }}
      />
      <GlobalContext.Provider value={{ getSortedContacts, setAlertStatus }}>
        <Navbar loading={loading} />
        {contacts && <Contacts contactList={contacts} />}
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
