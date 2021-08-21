import axios from 'axios';

const url = 'https://taroko-contacts-server.herokuapp.com';

export const getContacts = async () => {
  const res = await axios.get(`${url}/api/contacts`)
    .then((response) => response.data.data)
    .catch((error) => error);
  return res;
};