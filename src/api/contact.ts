import axios from 'axios';

const url = 'https://taroko-contacts-server.herokuapp.com';

interface ContactInfo {
  id?: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}

export const getContacts = async () => {
  return await axios.get(`${url}/api/contacts`)
    .then((response) => response.data.data)
    .catch((error) => console.log(error));
};

export const createContact = async (payload: ContactInfo) => {
  console.log('here')
  return await axios.post(`${url}/api/contacts`, { contact: { ...payload } })
    .then((response) => response)
    .catch((error) => console.log(error))
}

export const updateContact = async ({ id, ...rest }: ContactInfo) => {
  return await axios.patch(`${url}/api/contacts/${id}`, { info: { ...rest } })
    .then((response) => response)
    .catch((error) => console.log(error))
}

export const deleteContact = async (id: number) => {
  return await axios.delete(`${url}/api/contacts/${id}`)
    .then((response) => response)
    .catch((error) => console.log(error))
}